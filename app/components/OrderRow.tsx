"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRefund } from "../lib/api";
import Link from "next/link";
import { useState } from "react";
import { OrderRowProps } from "../types";
import toast from "react-hot-toast";

const OrderRow = ({ id, reason, store_name, store_logo, store_url, amount, active, itemsCount, decision }: OrderRowProps) => {
    const queryClient = useQueryClient();
    const [isActive, setIsActive] = useState(active);
    const [currentDecision, setCurrentDecision] = useState(decision || "Not Yet");

    const { mutate: toggleActive } = useMutation({
        mutationFn: () => updateRefund(id, { active: !isActive }),
        onSuccess: () => {
            setIsActive(!isActive);
            queryClient.invalidateQueries({ queryKey: ["refunds"] });
            toast.success(`Order ${id} is now ${!isActive ? "Inactive" : "Active"}`);
        },
    });

    const { mutate: changeDecision } = useMutation({
        mutationFn: (newDecision: string) => updateRefund(id, { decision: newDecision }),
        onSuccess: (newDecision) => {
            setCurrentDecision(newDecision.decision);
            queryClient.invalidateQueries({ queryKey: ["refunds"] });
            toast.success(`Decision updated to ${newDecision.decision}`);
        },
    });

    return (
        <tr className="border-b border-button hover:bg-button text-white">
            <td className="px-4 py-2">{id}</td>
            <td className="px-4 py-2">{reason}</td>
            <td className="px-4 py-2 flex items-center space-x-2">
                <img src={store_logo} alt={store_name} className="w-8 h-8 rounded-full" />
                <a href={store_url} className="text-secondary" target="_blank" rel="noopener noreferrer">
                    {store_name}
                </a>
            </td>
            <td className="px-4 py-2">{amount} SAR</td>
            <td className="px-4 py-2">
                <button
                    onClick={() => toggleActive()}
                    className={`px-3 py-1 text-sm font-semibold rounded-md text-white ${isActive ? "bg-green-500" : "bg-red-500"}`}
                >
                    {isActive ? "Active" : "Inactive"}
                </button>
            </td>
            <td className="px-4 py-2">{itemsCount} items</td>
            <td className="px-4 py-2">
                <select
                    value={currentDecision}
                    onChange={(e) => changeDecision(e.target.value)}
                    className="border px-2 py-1 rounded-md text-primary"
                >
                    <option value="Not Yet">Not Yet</option>
                    <option value="Accept">Accept</option>
                    <option value="Reject">Reject</option>
                    <option value="Escalate">Escalate</option>
                </select>
            </td>
            <td className="px-4 py-2">
                <Link href={`/refunds/${id}`} className="inline-flex items-center justify-center p-2 rounded-full hover:bg-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-secondary hover:text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </Link>
            </td>
        </tr>
    );
};

export default OrderRow;

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
        <tr className="border-b hover:bg-gray-50">
            <td className="px-4 py-2">{id}</td>
            <td className="px-4 py-2">{reason}</td>
            <td className="px-4 py-2 flex items-center space-x-2">
                <img src={store_logo} alt={store_name} className="w-8 h-8 rounded-full" />
                <a href={store_url} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                    {store_name}
                </a>
            </td>
            <td className="px-4 py-2">{amount} SAR</td>
            <td className="px-4 py-2">
                <button
                    onClick={() => toggleActive()}
                    className={`px-3 py-1 text-sm font-semibold rounded-md ${isActive ? "bg-green-500 text-white" : "bg-gray-300 text-black"}`}
                >
                    {isActive ? "Active" : "Inactive"}
                </button>
            </td>
            <td className="px-4 py-2">{itemsCount} items</td>
            <td className="px-4 py-2">
                <select
                    value={currentDecision}
                    onChange={(e) => changeDecision(e.target.value)}
                    className="border px-2 py-1 rounded-md"
                >
                    <option value="Not Yet">Not Yet</option>
                    <option value="Accept">Accept</option>
                    <option value="Reject">Reject</option>
                    <option value="Escalate">Escalate</option>
                </select>
            </td>
            <td className="px-4 py-2">
                <Link href={`/refunds/${id}`} className="text-blue-500 underline">
                    View
                </Link>
            </td>
        </tr>
    );
};

export default OrderRow;

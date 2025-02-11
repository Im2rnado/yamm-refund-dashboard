"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchRefundById } from "../../lib/api";
import { useParams } from "next/navigation";
import Link from "next/link";
import { OrderItem } from "../../types";

export default function OrderDetailsPage() {
    const { id } = useParams();
    const { data: order, isLoading, error } = useQuery({
        queryKey: ["refund", id],
        queryFn: () => fetchRefundById(id as string),
    });

    if (isLoading) return <p>Loading order details...</p>;
    if (error) return <p>Order not found!</p>;

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="max-w-3xl w-full p-6 bg-primary shadow-md rounded-md text-white">
                <h1 className="text-2xl font-bold mb-4">Order Details - {order.id}</h1>
                <p><strong>Reason:</strong> {order.reason}</p>
                <p>
                    <strong>Store:</strong> <a href={order.store_url}>{order.store_name}</a>
                </p>
                <p><strong>Amount:</strong> {order.amount} SAR</p>
                <p><strong>Status:</strong> {order.active ? "Active" : "Inactive"}</p>
                <p><strong>Decision:</strong> {order.decision || "Not Yet"}</p>

                <h2 className="text-xl font-semibold mt-4">Items:</h2>
                <ul className="mt-2 space-y-2">
                    {order.items.map((item: OrderItem) => (
                        <li key={item.id} className="border p-3 rounded-md flex justify-between">
                            <span>{item.name} (x{item.quantity})</span>
                            <span>{item.price} SAR</span>
                        </li>
                    ))}
                </ul>

                <Link href="/refunds" className="mt-6 inline-block text-secondary">{"< Back to All Orders"}</Link>
            </div>
        </div>
    );
}
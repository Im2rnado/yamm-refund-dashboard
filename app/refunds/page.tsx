"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchRefunds } from "../lib/api";
import OrdersTable from "../components/OrdersTable";

export default function RefundOrdersPage() {
    const { data: orders, isLoading, error } = useQuery({
        queryKey: ["refunds"],
        queryFn: fetchRefunds,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong!</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Refund Orders</h1>
            <OrdersTable orders={orders} />
        </div>
    );
}

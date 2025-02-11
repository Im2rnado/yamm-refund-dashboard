"use client";
import { useQuery } from "@tanstack/react-query";
import Table from "../components/Table";
import OrderRow from "../components/OrderRow";
import { fetchRefunds } from "../lib/api";
import { Order } from "../types";

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
            <Table headers={["ID", "Reason", "Store", "Amount", "Status", "Items", "Decision", "Actions"]}>
                {orders.map((order: Order) => (
                    <OrderRow
                        key={order.id}
                        id={order.id}
                        reason={order.reason}
                        store_name={order.store_name}
                        store_logo={order.store_logo}
                        store_url={order.store_url}
                        amount={order.amount}
                        active={order.active}
                        itemsCount={order.items.length}
                        decision={order.decision}
                    />
                ))}
            </Table>
        </div>
    );
}

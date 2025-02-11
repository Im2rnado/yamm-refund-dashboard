"use client";
import { useState } from "react";
import Table from "../components/Table";
import OrderRow from "../components/OrderRow";

const mockData = [
    {
        id: "ORD123",
        reason: "Defective Item",
        store_name: "Luxury Watches",
        store_logo: "/logos/luxury.png",
        store_url: "https://luxurywatches.com",
        amount: 3499,
        active: true,
        decision: null,
        items: [{ name: "First Night Age", id: "W001", price: 3499, quantity: 1 }],
    },
];

export default function RefundOrdersPage() {
    const [orders] = useState(mockData);

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Refund Orders</h1>
            <Table headers={["ID", "Reason", "Store", "Amount", "Status", "Items", "Decision", "Actions"]}>
                {orders.map((order) => (
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

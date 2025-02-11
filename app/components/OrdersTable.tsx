import { useState } from "react";
import OrderRow from "./OrderRow";
import { Order } from "../types";
import Table from "./Table";

interface OrdersTableProps {
    orders: Order[];
}

export default function OrdersTable({ orders }: OrdersTableProps) {
    const [page, setPage] = useState(1);
    const perPage = 15;

    const totalPages = Math.ceil(orders.length / perPage);
    const paginatedOrders = orders.slice((page - 1) * perPage, page * perPage);

    return (
        <div className="bg-primary shadow-md rounded-md p-4">
            <Table headers={["ID", "Reason", "Store", "Amount", "Status", "Items", "Decision", "View"]}>
                {paginatedOrders.map((order) => (
                    <OrderRow key={order.id} {...order} itemsCount={order.items.length} />
                ))}
            </Table>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-4 py-2 bg-button text-white rounded-md disabled:opacity-50"
                >
                    Previous
                </button>

                <span className="text-sm">
                    Page {page} of {totalPages}
                </span>

                <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="px-4 py-2 bg-button text-white rounded-md disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

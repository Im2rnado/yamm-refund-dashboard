import Link from "next/link";

interface OrderRowProps {
    id: string;
    reason: string;
    store_name: string;
    store_logo: string;
    store_url: string;
    amount: number;
    active: boolean;
    itemsCount: number;
    decision: string | null;
}

const OrderRow = ({
    id,
    reason,
    store_name,
    store_logo,
    store_url,
    amount,
    active,
    itemsCount,
    decision,
}: OrderRowProps) => {
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
            <td className="px-4 py-2">{active ? "Active" : "Inactive"}</td>
            <td className="px-4 py-2">{itemsCount} items</td>
            <td className="px-4 py-2">{decision || "Not Yet"}</td>
            <td className="px-4 py-2">
                <Link href={`/refunds/${id}`} className="text-blue-500 underline">
                    View
                </Link>
            </td>
        </tr>
    );
};

export default OrderRow;

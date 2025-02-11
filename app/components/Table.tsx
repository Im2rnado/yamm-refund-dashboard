import { ReactNode } from "react";

interface TableProps {
    headers: string[];
    children: ReactNode;
}

const Table = ({ headers, children }: TableProps) => {
    return (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="w-full border-collapse">
                <thead className="bg-gray-100 border-b">
                    <tr>
                        {headers.map((header) => (
                            <th key={header} className="px-4 py-2 text-left text-gray-700 font-semibold">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    );
};

export default Table;

import { ReactNode } from "react";

interface TableProps {
    headers: string[];
    children: ReactNode;
}

const Table = ({ headers, children }: TableProps) => {
    return (
        <table className="w-full border-collapse">
            <thead className="bg-secondary border-b rounded-md">
                <tr>
                    {headers.map((header) => (
                        <th key={header} className="px-4 py-2 text-left text-primary font-semibold">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
};

export default Table;
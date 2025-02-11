'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const Sidebar = () => {
    const pathname = usePathname();

    const links = [
        { href: "/refunds", label: "Refund Orders" },
    ];

    return (
        <aside className="w-64 h-screen bg-primary text-white fixed top-0 left-0 flex flex-col p-4">
            <h2 className="text-xl font-bold mb-6">Yamm Dashboard</h2>
            <nav>
                <ul className="space-y-3">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={clsx(
                                    "block px-4 py-2 rounded-md transition",
                                    pathname === link.href ? "bg-button" : "hover:bg-button"
                                )}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
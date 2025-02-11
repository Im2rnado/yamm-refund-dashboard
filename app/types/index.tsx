export interface Order {
    id: string;
    reason: string;
    store_name: string;
    store_logo: string;
    store_url: string;
    amount: number;
    active: boolean;
    items: OrderItem[];
    decision: string;
}

export interface OrderRowProps {
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

export interface OrderItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
}
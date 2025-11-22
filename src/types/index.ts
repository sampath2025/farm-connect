export type UserRole = 'farmer' | 'restaurant' | 'broker';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    avatarUrl?: string;
}

export interface Product {
    id: string;
    name: string;
    category: 'vegetable' | 'fruit' | 'herb' | 'grain' | 'other';
    unit: 'kg' | 'lb' | 'bunch' | 'case' | 'dozen' | 'box';
    seasonality: string[];
    imageUrl?: string;
}

export interface Listing {
    id: string;
    farmerId: string;
    productId: string;
    productName: string; // Denormalized for display
    quantity: number;
    availableDate: string; // ISO Date
    basePrice: number; // Price per unit set by farmer
    status: 'active' | 'sold' | 'expired';
}

export interface Order {
    id: string;
    restaurantId: string;
    brokerId?: string;
    status: 'pending' | 'approved' | 'delivering' | 'delivered' | 'cancelled';
    totalAmount: number;
    items: OrderItem[];
    createdAt: string;
}

export interface OrderItem {
    listingId: string;
    quantity: number;
    priceAtPurchase: number; // Includes broker margin
}

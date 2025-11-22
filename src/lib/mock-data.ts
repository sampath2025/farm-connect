import { User, Product, Listing, Order } from "@/types";

// --- Mock Data ---

export const MOCK_USERS: User[] = [
    { id: "u1", name: "Kisan Mandi (Farmers Market)", email: "kisan@example.com", role: "farmer", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces" },
    { id: "u4", name: "Organic Harvest India", email: "harvest@example.com", role: "farmer", avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces" },
    { id: "u2", name: "Spice Route Bistro", email: "chef@example.com", role: "restaurant", avatarUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=150&h=150&fit=crop&crop=faces" },
    { id: "u5", name: "Curry House 42", email: "curry@example.com", role: "restaurant", avatarUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=150&h=150&fit=crop&crop=faces" },
    { id: "u6", name: "Tandoori Nights", email: "tandoor@example.com", role: "restaurant", avatarUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=150&h=150&fit=crop&crop=faces" },
    { id: "u3", name: "FastTrack Logistics", email: "broker@example.com", role: "broker", avatarUrl: "https://images.unsplash.com/photo-1586190848861-99c8a3da758c?w=150&h=150&fit=crop&crop=faces" },
];

export const MOCK_PRODUCTS: Product[] = [
    { id: "p1", name: "Alphonso Mangoes", category: "fruit", unit: "dozen", seasonality: ["Summer"], imageUrl: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&q=80" },
    { id: "p2", name: "Red Onions (Nashik)", category: "vegetable", unit: "kg", seasonality: ["All Year"], imageUrl: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=800&q=80" },
    { id: "p3", name: "Basmati Rice (Premium)", category: "grain", unit: "kg", seasonality: ["All Year"], imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80" },
    { id: "p4", name: "Fresh Coriander", category: "herb", unit: "bunch", seasonality: ["Winter", "Spring"], imageUrl: "https://images.unsplash.com/photo-1588879460618-925d83267148?w=800&q=80" },
    { id: "p5", name: "Okra (Bhindi)", category: "vegetable", unit: "kg", seasonality: ["Summer", "Monsoon"], imageUrl: "https://images.unsplash.com/photo-1425543103986-226d3d8b4698?w=800&q=80" },
    { id: "p6", name: "Green Chillies", category: "vegetable", unit: "kg", seasonality: ["All Year"], imageUrl: "https://images.unsplash.com/photo-1588879460169-e8e0876f319c?w=800&q=80" },
    { id: "p7", name: "Kashmir Apples", category: "fruit", unit: "box", seasonality: ["Fall", "Winter"], imageUrl: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=800&q=80" },
    { id: "p8", name: "Desi Potatoes", category: "vegetable", unit: "kg", seasonality: ["Winter"], imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80" },
];

export const MOCK_LISTINGS: Listing[] = [
    { id: "l1", farmerId: "u1", productId: "p1", productName: "Alphonso Mangoes (Ratnagiri)", quantity: 50, availableDate: "2023-04-15", basePrice: 800.00, status: "active" },
    { id: "l2", farmerId: "u1", productId: "p2", productName: "Nashik Red Onions", quantity: 200, availableDate: "2023-11-22", basePrice: 40.00, status: "active" },
    { id: "l3", farmerId: "u4", productId: "p5", productName: "Fresh Bhindi (Okra)", quantity: 100, availableDate: "2023-11-26", basePrice: 60.00, status: "active" },
    { id: "l4", farmerId: "u4", productId: "p3", productName: "Royal Basmati Rice", quantity: 500, availableDate: "2023-11-24", basePrice: 120.00, status: "active" },
    { id: "l5", farmerId: "u1", productId: "p6", productName: "Spicy Green Chillies", quantity: 45, availableDate: "2023-11-28", basePrice: 80.00, status: "active" },
    { id: "l6", farmerId: "u4", productId: "p8", productName: "Organic Potatoes", quantity: 200, availableDate: "2023-12-01", basePrice: 35.00, status: "active" },
    { id: "l7", farmerId: "u1", productId: "p4", productName: "Fresh Coriander", quantity: 150, availableDate: "2023-11-23", basePrice: 20.00, status: "active" },
    { id: "l8", farmerId: "u4", productId: "p7", productName: "Kashmiri Apples", quantity: 50, availableDate: "2023-11-30", basePrice: 1500.00, status: "active" },
];

export const MOCK_ORDERS: Order[] = [
    {
        id: "o1",
        restaurantId: "u2",
        brokerId: "u3",
        status: "delivered",
        totalAmount: 4500.00,
        items: [
            { listingId: "l1", quantity: 5, priceAtPurchase: 900.00 },
        ],
        createdAt: "2023-11-15T10:00:00Z",
    },
    {
        id: "o2",
        restaurantId: "u5",
        brokerId: "u3",
        status: "pending",
        totalAmount: 2400.00,
        items: [
            { listingId: "l2", quantity: 50, priceAtPurchase: 48.00 },
        ],
        createdAt: "2023-11-21T08:30:00Z",
    }
];

// --- Service Functions ---

export async function getListings(): Promise<Listing[]> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return MOCK_LISTINGS;
}

export async function getOrders(userId: string, role: string): Promise<Order[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (role === 'restaurant') {
        return MOCK_ORDERS.filter(o => o.restaurantId === userId);
    } else if (role === 'farmer') {
        // In a real app, we'd filter by items containing farmer's listings
        return MOCK_ORDERS;
    } else {
        return MOCK_ORDERS;
    }
}

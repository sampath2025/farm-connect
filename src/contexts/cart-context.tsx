"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Listing } from "@/types";

interface CartItem {
    listing: Listing;
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (listing: Listing, quantity?: number) => void;
    removeFromCart: (listingId: string) => void;
    updateQuantity: (listingId: string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("farmconnect-cart");
        if (savedCart) {
            setItems(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("farmconnect-cart", JSON.stringify(items));
    }, [items]);

    const addToCart = (listing: Listing, quantity: number = 1) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.listing.id === listing.id);
            if (existing) {
                return prev.map((item) =>
                    item.listing.id === listing.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { listing, quantity }];
        });
    };

    const removeFromCart = (listingId: string) => {
        setItems((prev) => prev.filter((item) => item.listing.id !== listingId));
    };

    const updateQuantity = (listingId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(listingId);
            return;
        }
        setItems((prev) =>
            prev.map((item) =>
                item.listing.id === listingId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    const getTotalItems = () => {
        return items.reduce((sum, item) => sum + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return items.reduce(
            (sum, item) => sum + item.listing.basePrice * 1.15 * item.quantity,
            0
        );
    };

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                getTotalItems,
                getTotalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

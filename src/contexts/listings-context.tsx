"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Listing } from "@/types";
import { MOCK_LISTINGS } from "@/lib/mock-data";

interface ListingsContextType {
    listings: Listing[];
    addListing: (listing: Omit<Listing, "id">) => void;
    updateListing: (id: string, listing: Partial<Listing>) => void;
    deleteListing: (id: string) => void;
}

const ListingsContext = createContext<ListingsContextType | undefined>(undefined);

export function ListingsProvider({ children }: { children: ReactNode }) {
    const [listings, setListings] = useState<Listing[]>(MOCK_LISTINGS);

    // Load listings from localStorage on mount
    useEffect(() => {
        const savedListings = localStorage.getItem("farmconnect-listings");
        if (savedListings) {
            setListings(JSON.parse(savedListings));
        }
    }, []);

    // Save listings to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("farmconnect-listings", JSON.stringify(listings));
    }, [listings]);

    const addListing = (listing: Omit<Listing, "id">) => {
        const newListing: Listing = {
            ...listing,
            id: `l${Date.now()}`,
        };
        setListings((prev) => [...prev, newListing]);
    };

    const updateListing = (id: string, updates: Partial<Listing>) => {
        setListings((prev) =>
            prev.map((listing) =>
                listing.id === id ? { ...listing, ...updates } : listing
            )
        );
    };

    const deleteListing = (id: string) => {
        setListings((prev) => prev.filter((listing) => listing.id !== id));
    };

    return (
        <ListingsContext.Provider
            value={{
                listings,
                addListing,
                updateListing,
                deleteListing,
            }}
        >
            {children}
        </ListingsContext.Provider>
    );
}

export function useListings() {
    const context = useContext(ListingsContext);
    if (!context) {
        throw new Error("useListings must be used within a ListingsProvider");
    }
    return context;
}

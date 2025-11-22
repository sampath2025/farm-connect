"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCart } from "@/contexts/cart-context";
import { Listing } from "@/types";
import { toast } from "sonner";

interface AddToCartButtonProps {
    listing: Listing;
}

export function AddToCartButton({ listing }: AddToCartButtonProps) {
    const [added, setAdded] = useState(false);
    const { addToCart } = useCart();

    const handleClick = () => {
        if (!listing || !listing.id) {
            toast.error("Unable to add item to cart");
            return;
        }

        addToCart(listing, 1);
        setAdded(true);
        toast.success(`Added ${listing.productName} to cart!`);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <Button
            className="w-full transition-all"
            onClick={handleClick}
            variant={added ? "secondary" : "default"}
            disabled={!listing || !listing.id}
        >
            {added ? "Added!" : "Add to Order"}
        </Button>
    );
}

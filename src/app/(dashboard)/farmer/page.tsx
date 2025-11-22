"use client";

import { InteractiveButton } from "@/components/interactive-button";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { Plus, Package } from "lucide-react";
import Image from "next/image";
import { useListings } from "@/contexts/listings-context";

export default function FarmerPage() {
    const { listings } = useListings();

    return (
        <div className="grid lg:grid-cols-[1fr_320px] gap-6">
            {/* Main Content */}
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Farmer Overview</h2>
                        <p className="text-sm sm:text-base text-muted-foreground">Manage your inventory and view incoming orders.</p>
                    </div>
                    <InteractiveButton className="gap-2 w-full sm:w-auto" actionName="Add Listing" toastMessage="Opening listing editor...">
                        <Plus className="h-4 w-4" /> <span className="hidden sm:inline">Add Listing</span><span className="sm:hidden">Add</span>
                    </InteractiveButton>
                </div>

                {/* Stats */}
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-6 rounded-xl border bg-card shadow-sm">
                        <div className="text-sm font-medium text-muted-foreground">Active Listings</div>
                        <div className="text-2xl font-bold mt-2">{listings.length}</div>
                    </div>
                    <div className="p-6 rounded-xl border bg-card shadow-sm">
                        <div className="text-sm font-medium text-muted-foreground">Pending Orders</div>
                        <div className="text-2xl font-bold mt-2">1</div>
                    </div>
                    <div className="p-6 rounded-xl border bg-card shadow-sm">
                        <div className="text-sm font-medium text-muted-foreground">Total Revenue (Mo)</div>
                        <div className="text-2xl font-bold mt-2">₹1,240.00</div>
                    </div>
                </div>

                {/* Inventory Table */}
                <div className="border rounded-xl bg-card shadow-sm overflow-hidden">
                    <div className="p-6 border-b flex items-center justify-between">
                        <h3 className="font-semibold flex items-center gap-2">
                            <Package className="h-5 w-5 text-primary" /> Current Inventory
                        </h3>
                    </div>
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm text-left">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Product</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Quantity</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Base Price</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Available Date</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Status</th>
                                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {listings.map((listing) => {
                                    const product = MOCK_PRODUCTS.find(p => p.id === listing.productId);
                                    return (
                                        <tr key={listing.id} className="border-b transition-colors hover:bg-muted/50">
                                            <td className="p-4 align-middle font-medium">
                                                <div className="flex items-center gap-3">
                                                    <div className="relative w-10 h-10 rounded-md overflow-hidden bg-muted flex-shrink-0">
                                                        <Image
                                                            src={product?.imageUrl || ""}
                                                            alt={listing.productName}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <span>{listing.productName}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 align-middle">{listing.quantity} {product?.unit}</td>
                                            <td className="p-4 align-middle">₹{listing.basePrice.toFixed(2)}</td>
                                            <td className="p-4 align-middle">{listing.availableDate}</td>
                                            <td className="p-4 align-middle">
                                                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                                    {listing.status}
                                                </span>
                                            </td>
                                            <td className="p-4 align-middle text-right">
                                                <InteractiveButton variant="ghost" size="sm" actionName="Edit Listing" toastMessage={`Editing ${listing.productName}...`}>Edit</InteractiveButton>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Right Sidebar - Mission Cards */}
            <div className="space-y-4">
                {/* Mission & Goals */}
                <div className="p-6 rounded-xl border bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 shadow-sm">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                        🎯 Our Mission
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Empowering farmers with direct market access and fair pricing. We connect you directly with restaurants, eliminating middlemen and ensuring you get the value you deserve for your hard work.
                    </p>
                </div>

                {/* How Farmers Benefit */}
                <div className="p-6 rounded-xl border bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 shadow-sm">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                        💰 Your Benefits
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                            <span>Set your own prices - no corporate control</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                            <span>Instant payment upon delivery</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                            <span>Direct communication with buyers</span>
                        </li>
                    </ul>
                </div>

                {/* How It Helps */}
                <div className="p-6 rounded-xl border bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 shadow-sm">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                        🌾 The Problem We Solve
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                        <li className="flex items-start gap-2">
                            <span className="text-red-600 dark:text-red-400 mt-0.5">✗</span>
                            <span>No more waiting for crops to sell</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-600 dark:text-red-400 mt-0.5">✗</span>
                            <span>No unfair prices from middlemen</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                            <span>Fresh produce reaches consumers faster</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

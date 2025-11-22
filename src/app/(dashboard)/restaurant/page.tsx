import { InteractiveButton } from "@/components/interactive-button";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { MOCK_LISTINGS, MOCK_PRODUCTS, MOCK_USERS } from "@/lib/mock-data";
import { ShoppingCart, Search, Filter } from "lucide-react";
import Image from "next/image";

export default function RestaurantPage() {
    return (
        <div className="grid lg:grid-cols-[1fr_320px] gap-6">
            {/* Main Content */}
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Marketplace</h2>
                        <p className="text-sm sm:text-base text-muted-foreground">Source fresh ingredients directly from local farms.</p>
                    </div>
                    <InteractiveButton variant="outline" className="gap-2 w-full sm:w-auto" actionName="View Cart" toastMessage="Your cart is empty!">
                        <ShoppingCart className="h-4 w-4" /> Cart (0)
                    </InteractiveButton>
                </div>

                {/* Search & Filter */}
                <div className="flex gap-2 sm:gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Search..."
                        />
                    </div>
                    <InteractiveButton variant="outline" className="gap-2 flex-shrink-0" actionName="Filter" toastMessage="Filter menu opening...">
                        <Filter className="h-4 w-4" /> <span className="hidden sm:inline">Filters</span>
                    </InteractiveButton>
                </div>

                {/* Product Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {MOCK_LISTINGS.map((listing) => {
                        const product = MOCK_PRODUCTS.find(p => p.id === listing.productId);
                        const farmer = MOCK_USERS.find(u => u.id === listing.farmerId);

                        return (
                            <div key={listing.id} className="group relative rounded-xl border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                                    <Image
                                        src={product?.imageUrl || ""}
                                        alt={product?.name || "Product Image"}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Badges */}
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        <span className="bg-background/90 backdrop-blur px-2 py-1 rounded-full text-xs font-semibold shadow-sm border flex items-center gap-1">
                                            {product?.category === 'vegetable' ? '🥬' : product?.category === 'fruit' ? '🍎' : '🌿'}
                                            <span className="capitalize">{product?.category}</span>
                                        </span>
                                    </div>

                                    <div className="absolute top-3 right-3 bg-background/90 backdrop-blur px-2 py-1 rounded-md text-xs font-medium shadow-sm border">
                                        Available: {new Date(listing.availableDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                    </div>
                                </div>

                                <div className="p-5 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="font-bold text-lg tracking-tight text-foreground line-clamp-1">{listing.productName}</h3>
                                            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                                                <div className="relative w-5 h-5 rounded-full overflow-hidden">
                                                    <Image src={farmer?.avatarUrl || ""} alt={farmer?.name || ""} fill className="object-cover" />
                                                </div>
                                                <span className="line-clamp-1">{farmer?.name}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4 border-t flex items-center justify-between gap-4">
                                        <div>
                                            <div className="font-bold text-2xl text-primary">₹{(listing.basePrice * 1.15).toFixed(2)}</div>
                                            <div className="text-xs text-muted-foreground font-medium">per {product?.unit}</div>
                                        </div>
                                        <div className="w-32">
                                            <AddToCartButton listing={listing} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
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
                        Bringing farm-fresh ingredients directly to your kitchen. We connect restaurants with local farmers for the freshest, highest-quality produce at fair prices.
                    </p>
                </div>

                {/* How Restaurants Benefit */}
                <div className="p-6 rounded-xl border bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 shadow-sm">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                        🍽️ Your Benefits
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                            <span>Fresh produce delivered within 24 hours</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                            <span>Know exactly where your food comes from</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                            <span>Better prices than wholesale markets</span>
                        </li>
                    </ul>
                </div>

                {/* How It Helps */}
                <div className="p-6 rounded-xl border bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 shadow-sm">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                        🌱 Why Direct Sourcing?
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                            <span>Support local farmers directly</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                            <span>Serve the freshest meals to your customers</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                            <span>Build sustainable food systems</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

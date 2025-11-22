"use client";

import Link from "next/link";
import { Leaf, LayoutDashboard, ShoppingBasket, Truck, Settings, LogOut, Sprout } from "lucide-react";
import { CartProvider } from "@/contexts/cart-context";
import { ListingsProvider } from "@/contexts/listings-context";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CartProvider>
            <ListingsProvider>
                <div className="flex min-h-screen bg-muted/20">
                    {/* Sidebar */}
                    <aside className="w-64 bg-card border-r hidden md:flex flex-col">
                        <div className="h-16 flex items-center px-6 border-b">
                            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                                <Leaf className="h-6 w-6" />
                                <span>FarmConnect</span>
                            </Link>
                        </div>

                        <nav className="flex-1 p-4 space-y-1">
                            <div className="px-2 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Dashboards (Demo)
                            </div>
                            <Link href="/farmer" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                                <LayoutDashboard className="h-4 w-4" />
                                Farmer View
                            </Link>
                            <Link href="/restaurant" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                                <ShoppingBasket className="h-4 w-4" />
                                Restaurant View
                            </Link>
                            <Link href="/broker" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                                <Truck className="h-4 w-4" />
                                Delivery Partner
                            </Link>

                            <div className="mt-8 px-2 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Resources
                            </div>
                            <Link href="/vertical-farming" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                                <Sprout className="h-4 w-4" />
                                Vertical Farming
                            </Link>

                            <div className="mt-8 px-2 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Account
                            </div>
                            <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                                <Settings className="h-4 w-4" />
                                Settings
                            </Link>
                        </nav>

                        <div className="p-4 border-t">
                            <Link href="/" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 rounded-md transition-colors">
                                <LogOut className="h-4 w-4" />
                                Sign Out
                            </Link>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 flex flex-col">
                        <header className="h-16 border-b bg-card/50 backdrop-blur flex items-center justify-between px-4 md:px-6 sticky top-0 z-10">
                            <div className="flex items-center gap-3">
                                <Link href="/" className="flex items-center gap-2 font-bold text-lg md:text-xl text-primary md:hidden">
                                    <Leaf className="h-5 w-5" />
                                    <span>FarmConnect</span>
                                </Link>
                                <h1 className="font-semibold text-base md:text-lg hidden md:block">Dashboard</h1>
                            </div>
                            <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/30" />
                        </header>
                        <div className="p-4 md:p-6 max-w-7xl mx-auto w-full">
                            {children}
                        </div>
                    </main>
                </div>
            </ListingsProvider>
        </CartProvider>
    );
}

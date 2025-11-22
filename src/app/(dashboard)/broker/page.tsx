import { InteractiveButton } from "@/components/interactive-button";
import { MOCK_ORDERS, MOCK_USERS } from "@/lib/mock-data";
import { TrendingUp, Truck, AlertCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function BrokerPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Delivery Partner Command Center</h2>
                    <p className="text-muted-foreground">Monitor logistics, approve orders, and manage margins.</p>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid gap-4 md:grid-cols-4">
                <div className="p-6 rounded-xl border bg-card shadow-sm">
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <TrendingUp className="h-4 w-4" /> Daily Volume
                    </div>
                    <div className="text-2xl font-bold mt-2">₹2,450.00</div>
                    <div className="text-xs text-green-600 mt-1">+12% from yesterday</div>
                </div>
                <div className="p-6 rounded-xl border bg-card shadow-sm">
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <Truck className="h-4 w-4" /> Active Deliveries
                    </div>
                    <div className="text-2xl font-bold mt-2">8</div>
                </div>
                <div className="p-6 rounded-xl border bg-card shadow-sm">
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <AlertCircle className="h-4 w-4" /> Pending Approval
                    </div>
                    <div className="text-2xl font-bold mt-2 text-orange-600">3</div>
                </div>
                <div className="p-6 rounded-xl border bg-card shadow-sm">
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4" /> Completed
                    </div>
                    <div className="text-2xl font-bold mt-2">142</div>
                </div>
            </div>

            {/* Active Restaurants Overview */}
            <div>
                <h3 className="font-semibold mb-4 text-lg">Active Restaurant Partners</h3>
                <div className="grid gap-4 md:grid-cols-3">
                    {MOCK_USERS.filter(u => u.role === 'restaurant').map(restaurant => (
                        <div key={restaurant.id} className="flex items-center gap-4 p-4 rounded-xl border bg-card shadow-sm hover:bg-muted/50 transition-colors">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted">
                                <Image src={restaurant.avatarUrl || ""} alt={restaurant.name} fill className="object-cover" />
                            </div>
                            <div>
                                <div className="font-bold text-lg">{restaurant.name}</div>
                                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Active Partner</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Logistics Board */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Recent Orders */}
                <div className="border rounded-xl bg-card shadow-sm">
                    <div className="p-6 border-b">
                        <h3 className="font-semibold">Recent Orders</h3>
                    </div>
                    <div className="p-0">
                        {MOCK_ORDERS.map((order) => (
                            <div key={order.id} className="p-4 border-b last:border-0 flex items-center justify-between hover:bg-muted/50 transition-colors">
                                <div>
                                    <div className="font-medium">Order #{order.id.toUpperCase()}</div>
                                    <div className="text-sm text-muted-foreground">The Rustic Spoon • {order.items.length} items</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <div className="font-bold">₹{order.totalAmount.toFixed(2)}</div>
                                        <div className="text-xs capitalize text-green-600">{order.status}</div>
                                    </div>
                                    <InteractiveButton variant="outline" size="sm" actionName="View Details" toastMessage={`Viewing details for Order #${order.id.toUpperCase()}`}>Details</InteractiveButton>
                                </div>
                            </div>
                        ))}
                        {/* Fake extra orders for demo */}
                        <div className="p-4 border-b last:border-0 flex items-center justify-between hover:bg-muted/50 transition-colors">
                            <div>
                                <div className="font-medium">Order #O2</div>
                                <div className="text-sm text-muted-foreground">Bistro 42 • 5 items</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <div className="font-bold">₹85.50</div>
                                    <div className="text-xs capitalize text-orange-600">Pending</div>
                                </div>
                                <InteractiveButton size="sm" actionName="Approve Order" toastMessage="Order #O2 Approved!">Approve</InteractiveButton>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Route Optimization (Placeholder) */}
                <div className="border rounded-xl bg-card shadow-sm flex flex-col">
                    <div className="p-6 border-b">
                        <h3 className="font-semibold">Route Optimization</h3>
                    </div>
                    <div className="flex-1 bg-muted/20 flex items-center justify-center p-8">
                        <div className="text-center text-muted-foreground">
                            <Truck className="h-12 w-12 mx-auto mb-4 opacity-20" />
                            <p>Map integration would go here.</p>
                            <p className="text-sm">Showing optimal route for 3 pickups.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

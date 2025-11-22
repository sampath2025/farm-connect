import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf, Store, Truck, ArrowLeft } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-muted/30 p-4">
            <div className="mb-8 text-center">
                <Link href="/" className="inline-flex items-center gap-2 font-bold text-2xl text-primary mb-2">
                    <Leaf className="h-8 w-8" />
                    <span>FarmConnect</span>
                </Link>
                <p className="text-muted-foreground">Select a role to view the demo dashboard</p>
            </div>

            <div className="grid gap-6 w-full max-w-4xl md:grid-cols-3">
                {/* Farmer Login */}
                <div className="bg-card p-8 rounded-xl shadow-sm border text-center hover:border-primary/50 transition-colors">
                    <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                        <Leaf className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Farmer</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                        Manage inventory & orders
                    </p>
                    <Link href="/farmer">
                        <Button className="w-full">Login as Farmer</Button>
                    </Link>
                </div>

                {/* Restaurant Login */}
                <div className="bg-card p-8 rounded-xl shadow-sm border text-center hover:border-accent/50 transition-colors">
                    <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                        <Store className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Restaurant</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                        Browse marketplace & buy
                    </p>
                    <Link href="/restaurant">
                        <Button className="w-full" variant="outline">Login as Restaurant</Button>
                    </Link>
                </div>

                {/* Broker Login */}
                <div className="bg-card p-8 rounded-xl shadow-sm border text-center hover:border-blue-500/50 transition-colors">
                    <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                        <Truck className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Broker</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                        Manage logistics & pricing
                    </p>
                    <Link href="/broker">
                        <Button className="w-full" variant="secondary">Login as Broker</Button>
                    </Link>
                </div>
            </div>

            <div className="mt-12">
                <Link href="/">
                    <Button variant="ghost" className="gap-2 text-muted-foreground">
                        <ArrowLeft className="h-4 w-4" /> Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}

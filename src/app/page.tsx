import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Store, Truck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-6 h-16 flex items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="flex items-center gap-2 font-bold text-xl text-primary">
          <Leaf className="h-6 w-6" />
          <span>FarmConnect</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#" className="hover:text-primary">How it Works</Link>
          <Link href="#" className="hover:text-primary">Farmers</Link>
          <Link href="#" className="hover:text-primary">Restaurants</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium hover:underline">
            Log in
          </Link>
          <Link href="/login">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-primary/10 via-background to-secondary/20 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
              Farm to Table, <span className="text-primary">Simplified.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect directly with local farmers. We handle the logistics and pricing, so you can focus on serving fresh, organic food.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" className="gap-2">
                  Start Sourcing <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline">
                  Join as Farmer
                </Button>
              </Link>
            </div>
          </div>

          {/* Abstract Background Elements */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
        </section>

        {/* Role Selection / Value Props */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Farmer Card */}
            <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">For Farmers</h3>
              <p className="text-muted-foreground mb-6">
                Set your prices and list your harvest. We handle the logistics and find the buyers.
              </p>
              <Button variant="link" className="p-0 h-auto">Learn more &rarr;</Button>
            </div>

            {/* Restaurant Card */}
            <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 text-accent">
                <Store className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">For Restaurants</h3>
              <p className="text-muted-foreground mb-6">
                Source fresh, local ingredients with transparent pricing and reliable delivery.
              </p>
              <Button variant="link" className="p-0 h-auto">Learn more &rarr;</Button>
            </div>

            {/* Broker/Logistics Card */}
            <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Logistics & Pricing</h3>
              <p className="text-muted-foreground mb-6">
                Our transparent broker layer ensures fair margins and efficient delivery routes.
              </p>
              <Button variant="link" className="p-0 h-auto">See how it works &rarr;</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} FarmConnect. All rights reserved.
      </footer>
    </div>
  );
}

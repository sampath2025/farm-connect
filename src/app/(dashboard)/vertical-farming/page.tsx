import Image from "next/image";
import { Sprout, Droplet, TrendingUp, Sun, Leaf, Building2 } from "lucide-react";

export default function VerticalFarmingPage() {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-700/90 z-10" />
                <Image
                    src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&q=80"
                    alt="Vertical Farming"
                    width={1200}
                    height={400}
                    className="object-cover w-full h-[400px]"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center text-center p-8">
                    <div>
                        <h1 className="text-5xl font-bold text-white mb-4">Vertical Farming</h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            The future of sustainable agriculture - Growing more with less space, water, and environmental impact
                        </p>
                    </div>
                </div>
            </div>

            {/* What is Vertical Farming */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">What is Vertical Farming?</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        Vertical farming is the practice of growing crops in vertically stacked layers, often in controlled indoor environments.
                        This innovative approach uses soil-less farming techniques like hydroponics, aeroponics, and aquaponics.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        By utilizing vertical space and advanced technology, farmers can produce significantly more food per square meter
                        compared to traditional farming methods, while using up to 95% less water.
                    </p>
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                        alt="Vertical Farm Interior"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Key Benefits */}
            <div>
                <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits of Vertical Farming</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-xl border bg-card shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                            <Droplet className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">Water Efficiency</h3>
                        <p className="text-muted-foreground">
                            Uses up to 95% less water than traditional farming through recirculation systems and precise delivery.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl border bg-card shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                            <Building2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">Space Optimization</h3>
                        <p className="text-muted-foreground">
                            Produces 10-20x more yield per square meter by utilizing vertical space in urban areas.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl border bg-card shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mb-4">
                            <Sun className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">Year-Round Production</h3>
                        <p className="text-muted-foreground">
                            Climate-controlled environments enable consistent harvests regardless of weather or season.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl border bg-card shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                            <Leaf className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">Pesticide-Free</h3>
                        <p className="text-muted-foreground">
                            Controlled environments eliminate the need for harmful pesticides and herbicides.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl border bg-card shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mb-4">
                            <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">Higher Yields</h3>
                        <p className="text-muted-foreground">
                            Optimized growing conditions result in faster growth cycles and increased productivity.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl border bg-card shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mb-4">
                            <Sprout className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">Local Production</h3>
                        <p className="text-muted-foreground">
                            Reduces transportation costs and carbon footprint by growing food closer to consumers.
                        </p>
                    </div>
                </div>
            </div>

            {/* Use Cases */}
            <div>
                <h2 className="text-3xl font-bold mb-8 text-center">Common Use Cases</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-[300px] rounded-xl overflow-hidden group">
                        <Image
                            src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=800&q=80"
                            alt="Leafy Greens"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                            <h3 className="text-white font-bold text-2xl mb-2">Leafy Greens & Herbs</h3>
                            <p className="text-white/90">Lettuce, spinach, kale, basil, and microgreens thrive in vertical systems.</p>
                        </div>
                    </div>

                    <div className="relative h-[300px] rounded-xl overflow-hidden group">
                        <Image
                            src="https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=800&q=80"
                            alt="Strawberries"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                            <h3 className="text-white font-bold text-2xl mb-2">Berries & Fruits</h3>
                            <p className="text-white/90">Strawberries, tomatoes, and peppers can be grown vertically with proper support.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Getting Started */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-4 text-center">Ready to Start Vertical Farming?</h2>
                <p className="text-center text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                    Whether you're a small-scale farmer or looking to scale up, vertical farming offers incredible opportunities
                    for sustainable and profitable agriculture.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                        Learn More
                    </button>
                    <button className="px-6 py-3 border border-input rounded-lg font-semibold hover:bg-muted transition-colors">
                        Contact Expert
                    </button>
                </div>
            </div>
        </div>
    );
}

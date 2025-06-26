"use client"

import { motion } from "framer-motion"
import { Clock, Heart, ShoppingCart, Star, Users } from "lucide-react"

export default function GiftShop() {
    const giftCards = [
        {
            title: "Unlimited Sleep",
            description: "Finally get that 8-hour sleep you've been dreaming about since 2019",
            status: "OUT OF STOCK",
            statusColor: "text-red-300",
            icon: "😴",
            rating: 4.9,
            reviews: 2847,
            delivery: "Never arrives",
            inStock: false,
        },
        {
            title: "Momo Lifetime Supply",
            description: "Unlimited momos delivered to your door. Side effects: Happiness overload",
            status: "COMING SOON",
            statusColor: "text-yellow-300",
            icon: "🥟",
            rating: 5.0,
            reviews: 9999,
            delivery: "2-3 years later",
            inStock: false,
        },
        {
            title: "New Brain Cell",
            description: "Replacement for the one you lost during your last exam. Warranty void.",
            status: "DEFECTIVE",
            statusColor: "text-orange-300",
            icon: "🧠",
            rating: 2.1,
            reviews: 404,
            delivery: "Error 404",
            inStock: false,
        },
    ]

    return (
        <section className="py-48 px-8 relative min-h-screen flex items-center justify-center">
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white bg-clip-text text-transparent">
                        🛍️ Birthday Essentials Store
                    </h2>

                    {/* Simplified roast message */}
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-center text-gray-400 mb-20 text-xl"
                    >
                        Everything you need but will never get! 😂
                    </motion.p>


                    {/* Simple stats */}
                    <div className="text-gray-400 text-sm">
                        <span>0% success rate • 10M+ disappointed customers</span>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {giftCards.map((gift, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 100, opacity: 0, scale: 0.9 }}
                            whileInView={{ y: 0, opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            whileHover={{ scale: 1.02, y: -8 }}
                            className="group relative cursor-pointer"
                        >
                            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl min-h-[420px] flex flex-col overflow-hidden">
                                {/* Status Badge */}
                                <div className="absolute top-4 right-4 z-20">
                                    <div
                                        className={`${gift.statusColor} text-xs font-bold px-3 py-1 bg-black/60 rounded-full border border-current/50 backdrop-blur-sm`}
                                    >
                                        {gift.status}
                                    </div>
                                </div>

                                {/* Product Image/Icon */}
                                <div className="text-center mb-6">
                                    <motion.div
                                        animate={{
                                            rotate: [0, 5, -5, 0],
                                            scale: [1, 1.05, 1],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Number.POSITIVE_INFINITY,
                                            delay: index * 0.5,
                                        }}
                                        className="text-6xl mb-4 filter drop-shadow-lg"
                                    >
                                        {gift.icon}
                                    </motion.div>

                                    {/* Rating */}
                                    <div className="flex items-center justify-center gap-2 mb-2">
                                        <div className="flex">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < Math.floor(gift.rating) ? "text-yellow-400 fill-current" : "text-gray-400"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-300">{gift.rating}</span>
                                        <span className="text-xs text-gray-400">({gift.reviews.toLocaleString()})</span>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="flex-1 space-y-4">
                                    <h3 className="text-xl font-bold text-white leading-tight">{gift.title}</h3>

                                    <p className="text-sm text-gray-300 leading-relaxed">{gift.description}</p>

                                    {/* Delivery Info */}
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <Clock className="w-3 h-3" />
                                        <span>{gift.delivery}</span>
                                    </div>

                                    {/* Social Proof */}
                                    <div className="flex items-center gap-4 text-xs text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <Heart className="w-3 h-3" />
                                            <span>{Math.floor(gift.reviews / 10)} likes</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <div className="mt-6">
                                    <motion.button
                                        whileHover={{ scale: gift.inStock ? 1.02 : 1 }}
                                        whileTap={{ scale: gift.inStock ? 0.98 : 1 }}
                                        disabled={!gift.inStock}
                                        className="w-full font-bold py-3 px-6 rounded-2xl shadow-lg border transition-all duration-300 relative overflow-hidden group/btn bg-gray-600/20 text-gray-500 border-gray-600/30 cursor-not-allowed"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            <ShoppingCart className="w-4 h-4" />
                                            Unavailable
                                        </span>
                                    </motion.button>
                                </div>

                                {/* Hover glow effect */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none"
                                />

                                {/* Floating particles */}
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    {Array.from({ length: 3 }, (_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-1 h-1 bg-white/20 rounded-full"
                                            style={{
                                                left: `${20 + i * 30}%`,
                                                top: `${20 + i * 25}%`,
                                            }}
                                            animate={{
                                                y: [0, -20, 0],
                                                opacity: [0.2, 0.6, 0.2],
                                            }}
                                            transition={{
                                                duration: 5,
                                                repeat: Number.POSITIVE_INFINITY,
                                                delay: i * 1.2,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom disclaimer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-center mt-20 space-y-6"
                >
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    </p>
                    <div className="text-sm text-gray-500">⚠️*Free = Pay with hopes & dreams. No refunds on disappointment! 😂</div>
                </motion.div>
            </div>
        </section>
    )
}
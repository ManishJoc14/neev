"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function MakeAWish({ cakeInView }: { cakeInView: boolean }) {
    return (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={cakeInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 max-w-md shadow-2xl"
            >
                <h2 className="text-3xl font-bold mb-4 text-white">
                    🎂 Make a Wish! 🎂
                </h2>
                <p className="text-purple-200 text-lg mb-6">Close your eyes and make it count!</p>
                <div className="flex justify-center space-x-2">
                    {Array.from({ length: 5 }, (_, i) => (
                        <motion.div
                            key={i}
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                        >
                            <Star className="w-5 h-5 text-yellow-400" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
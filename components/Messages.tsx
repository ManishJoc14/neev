"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Messages({ heroInView }: { heroInView: boolean }) {
    const quotes = [
        { text: "May your special day be filled with endless joy and unforgettable moments! ❤️" },
        { text: "Another year older, another year of questionable life choices!" },
        { text: "Age is just a number............................ a really, REALLY big number!" },
        { text: "You're not old, you're just... vintage! Like fine wine or cheese!", },
        { text: "Congratulations on surviving another trip around the sun Neev!", },
        { text: "You're like a software update - nobody asked for it, but here we are!", },
    ]

    const [currentQuote, setCurrentQuote] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % quotes.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex justify-center"
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border w-[60vw] border-white/20 rounded-full px-12 py-6 cursor-pointer group"
            >
                <div className="flex items-center space-x-4 text-white">
                    <motion.span
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="text-3xl"
                    >
                        🎂
                    </motion.span>
                    <span className="text-xl font-medium">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={heroInView ? { opacity: 1 } : {}}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="text-lg lg:text-xl text-purple-200 font-light max-w-3xl mx-auto leading-relaxed"
                        >
                            {quotes[currentQuote].text}
                        </motion.p>
                    </span>
                    <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        className="text-3xl"
                    >
                        🎈
                    </motion.span>
                </div>
            </motion.div>
        </motion.div>
    );
}
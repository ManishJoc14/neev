"use client"
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="py-12 text-center relative">
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative text-purple-300 text-lg"
            >
                Made with 💜 for an amazing birthday boy Neev By Manish! ✨
            </motion.p>
        </footer>
    );
}
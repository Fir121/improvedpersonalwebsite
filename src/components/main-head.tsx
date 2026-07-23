"use client";
import { AnimText } from "@/components/typewriter";
import * as motion from "framer-motion/client";
import BlurText from "@/components/ui/BlurText";

export function MainHeader() {
        return (
                <motion.div 
                    className="w-fit mx-auto md:p-10 p-2 md:rounded-lg rounded-none backdrop-blur-md shadow-2xl flex flex-col gap-5 md:border-2 border-0 border-b-8 pb-4 pt-4 border-t-8 text-center"
                    initial={{ borderColor: "#a7ef9e" }}
                    animate={{ borderColor: "#ffffff" }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 8,
                        ease: "linear" as const,
                    }}
                >
                        {/* <h1 className="text-6xl font-bold">Hello, {"I am"} <b>Firas</b>!</h1> */}
                        <div className="flex items-center gap-4">
                                <span aria-hidden="true" className="flex-1 h-[1px] bg-white/60 hidden md:block" />
                                <h1 className="text-sm font-semibold tracking-widest px-4 mx-auto">PORTFOLIO</h1>
                                <span aria-hidden="true" className="flex-1 h-[1px] bg-white/60 hidden md:block" />
                        </div>
                        <h2>
                                <BlurText
                                        text="Hello, I am Firas!"
                                        delay={150}
                                        animateBy="words"
                                        direction="top"
                                        className="text-7xl font-bold"
                                />
                        </h2>
                        <AnimText delay={1.5} />
                </motion.div>
        );
}
import { AnimText } from "@/components/typewriter";
import * as motion from "framer-motion/client";

export function MainHeader() {
        return (
                <motion.div 
                    className="w-fit mx-auto md:p-10 p-0 rounded-lg backdrop-blur-md shadow-2xl flex flex-col gap-5 md:border-8 border-0 border-b-8 pb-4 pt-4 border-t-8"
                    initial={{borderImage: "linear-gradient(45deg, #24305E, #f8a13f) 1"}}
                    animate={{borderImage: "linear-gradient(-45deg, #405ac4, #cd3c18) 1"}}
                    transition={{ borderImage: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 3,
                        ease: "linear",
                    } }}
                >
                        <h1 className="text-6xl font-bold">Hello, {"I'm"} <b>Firas</b>!</h1>
                        <AnimText delay={1} />
                </motion.div>
        );
}
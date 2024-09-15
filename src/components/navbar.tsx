"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub, FaRegFilePdf } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";

export function DynamicNav(){
    const [open, setOpen] = useState(false);

    return (
        <>
        <div className="absolute left-0 w-screen bottom-20">
            <motion.div
                layout
                onClick={() => setOpen(!open)}
                className="z-20 relative bg-dark-accent rounded-full w-16 h-16 p-10 mx-auto flex justify-center items-center align-middle cursor-pointer"
            >
                <motion.div layout className="bg-accent w-10 h-10 p-5 z-20 rounded-full pointer-events-none"/>
            </motion.div>            
        </div>
        <div className="absolute left-0 z-10 w-screen bottom-20">
            <motion.div
                layout
                className="relative bg-dark-accent h-16 mx-auto w-11/12 md:w-8/12 rounded-2xl max-w-4xl"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: open ? 1 : 0 }}
                transition={{ 
                    duration: 0.4,
                    ease:  "circInOut",
                    delay: 0.05,
                }}
            >
                <div className="menu-parent">
                    <div className="menu-item"><FaRegFilePdf /><p>Resume</p></div>
                    <div className="menu-item"><GrProjects /><p>Projects</p></div>
                    <div className="menu-break"></div>
                    <div className="menu-item"><AiOutlineLinkedin /><p>LinkedIn</p></div>
                    <div className="menu-item"><FaGithub /><p>GitHub</p></div>
                </div>
            </motion.div>
        </div>
        </>
    );
}
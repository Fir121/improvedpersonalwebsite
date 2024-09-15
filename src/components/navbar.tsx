"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaGithub, FaRegFilePdf } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";

export function DynamicNav({home}:{home: boolean}){
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed w-screen left-0 z-10 bottom-[5%]">
            <div className="absolute left-0 w-screen bottom-[5%]">
                <motion.div
                    layout
                    onClick={() => setOpen(!open)}
                    onKeyPress={(e) => {if(e.key === "Enter") setOpen(!open)}}
                    className="item z-20 relative bg-dark-accent rounded-full w-16 h-16 p-10 mx-auto flex justify-center items-center align-middle cursor-pointer"
                    onAnimationComplete={() => setOpen(true)}
                    initial= {{ y: 40, opacity: 0 }}
                    animate= {{
                        y: 0,
                        opacity: 1
                    }}
                    transition= {{
                        duration: 0.4,
                        ease: "easeInOut",
                    }}
                    aria-label="Expand Menu Button"
                    tabIndex={0}
                >
                    <motion.div layout className="bg-accent w-10 h-10 p-5 z-20 rounded-full pointer-events-none"/>
                </motion.div>            
            </div>
            <div className="absolute left-0 z-10 w-screen bottom-[5%]">
                <motion.div
                    layout
                    className="relative bg-dark-accent h-16 mx-auto w-11/12 md:w-8/12 rounded-2xl max-w-4xl"
                    initial={{ scaleX: 0, display: "none" }}
                    animate={{ scaleX: open ? 1 : 0, display: open ? "block" : "none" }}
                    transition={{ 
                        duration: 0.4,
                        ease:  "easeInOut",
                        delay: 0.05,
                    }}
                >
                    <div className="menu-parent rounded-2xl">
                        {
                            (home) ? <Link href="/projects" className="menu-item rounded-tl-2xl rounded-bl-2xl"><GrProjects /><p>Projects</p></Link>
                            : 
                            <Link href="/" className="menu-item rounded-tl-2xl rounded-bl-2xl"><FaHome /><p>Home</p></Link>
                        }
                        <Link href="/pdf/Mohamed Firas Adil.pdf" className="menu-item" target="_blank"><FaRegFilePdf /><p>Résumé</p></Link>
                        <div className="menu-break"></div>
                        <Link href="https://www.linkedin.com/in/mohamed-firas" className="menu-item" target="_blank"><AiOutlineLinkedin /><p>LinkedIn</p></Link>
                        <Link href="https://github.com/Fir121" className="menu-item rounded-tr-2xl rounded-br-2xl" target="_blank"><FaGithub /><p>GitHub</p></Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
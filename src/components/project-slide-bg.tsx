"use client"
import * as motion from "framer-motion/client";
import { useEffect, useState } from "react";
import { PreviewCard } from "./project-small-card";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function BackgroundSlider({time, cname}: {time: number, cname?:string}) {
    const [screenWidthInPx, setScreenWidthInPx] = useState(0);

    useEffect(() => {
        setScreenWidthInPx(window.innerWidth);
    }, []);

    const divWidth = (2/12) * screenWidthInPx;
    const gapWidth = 28;

    const totalWidth = projects.length * divWidth + (projects.length - 1) * gapWidth;
    const end = -1 * (totalWidth - screenWidthInPx);

    return (
        <div className={cn("w-full flex flex-row overflow-hidden gap-7",cname)}>
            {projects.map((x, idx) => (
                <motion.div 
                    key={idx} 
                    className="w-2/12 h-max-content grow-0 flex-shrink-0"
                    initial={{ x: 0 }}
                    animate={{ x: end }}
                    transition={{ x: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: time,
                        ease: "linear",
                    } }}
                >
                    <PreviewCard title={x.title} image={x.images[0]}/>
                </motion.div>
            ))}
        </div>
    );
}
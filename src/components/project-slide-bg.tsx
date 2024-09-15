import * as motion from "framer-motion/client";
import { PreviewCard } from "./project-small-card";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function BackgroundSlider({time, cname}: {time: number, cname?:string}) {
    return (
        <div className={cn("w-full flex flex-row overflow-hidden gap-7",cname)}>
            {projects.map((x, idx) => (
                <motion.div 
                    key={idx} 
                    className="w-72 h-max-content grow-0 flex-shrink-0 cursor-pointer rounded-lg"
                    initial={{ x: 0 }}
                    animate={{ x: (-1*(projects.length-3)*100) + "%" }}
                    transition={{ x: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: time,
                        ease: "linear",
                    } }}
                    whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0px 0px 10px 5px var(--dark-accent)"
                    }}
                >
                    <PreviewCard title={x.title} image={x.images[0]}/>
                </motion.div>
            ))}
        </div>
    );
}
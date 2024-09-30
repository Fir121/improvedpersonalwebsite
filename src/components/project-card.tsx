import { ProjectType } from "@/lib/projects"
import * as motion from "framer-motion/client";
  

export function DisplayCard({project} : {project: ProjectType}){
    return (
        <motion.div
            className="col-span-1 h-100 bg-slate-400 rounded-lg p-5 text-black"
        >
            <div>
                <p className="text-2xl pb-4 font-bold">{project.title}</p>
                <p className="text-sm">{project.description}</p>
            </div>
        </motion.div>
    );
}
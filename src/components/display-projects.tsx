import { projects } from "@/lib/projects";
import { DisplayCard } from "./project-card";

export function MainDisplay(){
    return (
        <div className="relative min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-4 p-10">
                {
                    projects.map((project, index) => (
                        <DisplayCard project={project} key={index}/>
                    ))
                }
            </div>
        </div>
    );
}
import { ProjectType } from "@/lib/projects"
import * as motion from "framer-motion/client";
import { EmblaCarousel } from "./carousel";
import { AnimatePresence } from "framer-motion";

function ContentDisplay({project, long} : {project: ProjectType, long: boolean}) {
    return (
        <>
        <EmblaCarousel images={project.images} title={project.title}/>
        <div>
            {
                (long && project.url) ? <p className="text-3xl pb-4 font-bold text-center underline text-cyan-900"><a href={project.url} target="_blank">{project.title}</a></p>
                :
                <p className="text-3xl pb-4 font-bold text-center">{project.title}</p>
            }
        </div>

        {long && (
            <div className="pb-3">
                <p className="pb-1">{project.description}</p>

                {project.features && project.features.length > 0 && (
                        <p>
                            <ul className="pl-4">
                            {
                                project.features.map((feature, index) => (
                                    <li key={index} className="list-disc">{feature}</li>
                                ))
                            }
                            </ul>
                        </p>
                )}

                {project.links && project.links.length > 0 && (
                    <div className="pt-3">
                        <p>Links:</p>
                        <ul className="pl-4">
                        {
                            project.links.map((link, index) => (
                                <li key={index} className="list-disc"><a href={link} className="text-slate-500 hover:text-slate-600" target="_blank">{link}</a></li>
                            ))
                        }
                        </ul>
                    </div>
                )}
            </div>
        )}

        <div className="w-100 pb-3">
            {
                project.tech.map((tag, index) => (
                    <span key={index} className="bg-slate-500 text-white rounded-full px-2 py-1 text-sm mr-2 inline-block my-1">{tag}</span>
                ))
            }
        </div>
        </>
    );
}


export function DisplayCard({index, project, selectedId, setSelectedId} : {project: ProjectType, selectedId: string|null, setSelectedId: (id: string|null) => void, index: string}) {
    

    return (
    <>
        <motion.div
            className="col-span-1 h-100 bg-slate-400 rounded-lg p-5 text-black relative overflow-hidden"
            layoutId={index.toString()} 
            
        >
            <ContentDisplay project={project} long={false}/>

            <button className="w-full block absolute bottom-0 bg-slate-500 left-0" onClick={() => setSelectedId(index)}>SEE MORE</button>
        </motion.div>

        <AnimatePresence>
            {selectedId===index && (
                <motion.div 
                    className="bg-[rgba(0,0,0,0.7)] fixed top-0 left-0 w-full h-full z-40 flex flex-col justify-center items-center py-10"
                    onClick={() => setSelectedId(null)}
                >
                    <motion.div 
                        layoutId={selectedId.toString()}
                        className="bg-slate-400 rounded-lg p-5 text-black relative overflow-y-scroll w-11/12 lg:w-6/12"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ContentDisplay project={project} long={true}/>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
    );
}
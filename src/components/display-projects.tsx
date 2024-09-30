"use client"
import { projects, ProjectType } from "@/lib/projects";
import { DisplayCard } from "./project-card";
import { useEffect, useState } from "react";
import { SearchBar } from "./searchProjects";

export function MainDisplay(){
    const [selectedId, setSelectedId] = useState<string|null>(null)
    const [projectsArr, setProjectsArr] = useState<ProjectType[]>(projects)
    const [firstLoad, setFirstLoad] = useState(true)

    useEffect(() => {
        if (firstLoad){
            const hash = window.location.hash;
            if (hash.length > 1){
                setSelectedId(hash.slice(1))
            }
            setFirstLoad(false)
            return;
        }
        if (selectedId){
            window.location.hash = "#"+selectedId
        }
        else{
            window.location.hash = "#none"
        }
    }, [selectedId])

    return (
        <div className="relative min-h-screen">
            <div className="p-6 md:p-10 pb-0">
                <h1 className="text-4xl font-bold w-100 text-center">MY WORK</h1>

                <p className="text-center md:block hidden">{"Here are some of the projects I've worked on over the years. Click on 'see more' to learn more!"}</p>

                <SearchBar projectsArr={projectsArr} setProjectsArr={setProjectsArr}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 auto-rows-auto gap-6 p-6 md:p-10">
                {
                    projectsArr.map((project) => (
                        <DisplayCard project={project} key={project.shorttitle} index={project.shorttitle} selectedId={selectedId} setSelectedId={setSelectedId}/>
                    ))
                }
            </div>
        </div>
    );
}
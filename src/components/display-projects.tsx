"use client"
import { projects, ProjectType } from "@/lib/projects";
import { DisplayCard } from "./project-card";
import { useState, useSyncExternalStore } from "react";
import { SearchBar } from "./searchProjects";

function subscribeToHash(onChange: () => void) {
    window.addEventListener("hashchange", onChange)
    return () => window.removeEventListener("hashchange", onChange)
}

function getSelectedId() {
    const id = window.location.hash.slice(1)
    return id && id !== "none" ? id : null
}

function setSelectedId(id: string | null) {
    window.location.hash = id ?? "none"
}

export function MainDisplay(){
    const selectedId = useSyncExternalStore(subscribeToHash, getSelectedId, () => null)
    const [projectsArr, setProjectsArr] = useState<ProjectType[]>(projects)

    return (
        <div className="relative min-h-screen pb-28 md:pb-0">
            <div className="p-6 pb-0">
                <h1 className="text-4xl font-bold w-100 text-center">MY WORK</h1>

                <p className="text-center md:block hidden mb-4">{"Here are some of the projects I've worked on over the years."}
                    <br/><em>{"Note: Some links may be outdated."}</em></p>

                <SearchBar setProjectsArr={setProjectsArr}/>
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

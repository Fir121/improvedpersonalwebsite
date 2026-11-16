"use client"
import { useEffect, useState } from "react";
import { projects, ProjectType } from "@/lib/projects";

export function SearchBar({setProjectsArr}: {setProjectsArr: (projects: ProjectType[]) => void}){
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        const query = search.toLowerCase();
        const filteredProjects = projects.filter(project => {
            const fields = [
                project.title, project.description, project.shorttitle, project.category,
                ...project.tech, ...project.features,
                ...(project.featureGroups ?? []).flatMap(group => [group.title, ...group.features]),
            ];
            return fields.some(field => field.toLowerCase().includes(query));
        })
        setProjectsArr(filteredProjects)
    }, [search, setProjectsArr]);

    return (
        <div className="w-full mt-2">
            <div className="relative mx-auto md:max-w-[600px]">
            <input
                type="text"
                placeholder="Search for a Project/Technology"
                className="block w-full p-3 pr-10 rounded-md border-white/20 text-foreground bg-white/30 hover:bg-white/40 transition focus:outline-none"
                onChange={(e) => setSearch(e.target.value)}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </span>
            </div>
        </div>
    );
}

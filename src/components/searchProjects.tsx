"use client"
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { projects, ProjectType } from "@/lib/projects";

export function SearchBar({projectsArr, setProjectsArr}: {projectsArr: ProjectType[], setProjectsArr: (projects: ProjectType[]) => void}){
    const [search, setSearch] = useState<string>("")
    const [selectedCategory, setSelectedCategory] = useState<string>("")
    const [selectedTech, setSelectedTech] = useState<string>("")
    const [viewFilters, setViewFilters] = useState<boolean>(false)

    const categories = Array.from(new Set(projectsArr.map(project => project.category)))
    const technologies = Array.from(new Set(projectsArr.map(project => project.tech).flat()))

    useEffect(() => {
        const filteredProjects = projects.filter(project => {
            if (search !== "" && !project.title.toLowerCase().includes(search.toLowerCase())){return false}
            if (selectedCategory !== "" && project.category !== selectedCategory){return false}
            if (selectedTech !== "" && !project.tech.includes(selectedTech)){return false}
            return true
        })
        setProjectsArr(filteredProjects)
    }, [search, selectedCategory, selectedTech]);

    return (
        <div className="w-full mt-2">
            <h2>Search</h2>
            <input type="text" placeholder="Search for a project" className="w-full p-3 rounded-md text-background" onChange={(e) => setSearch(e.target.value)}/>

            <button onClick={() => setViewFilters(!viewFilters)} className="bg-light-black text-foreground rounded-md p-2 mt-2">{viewFilters ? "Hide Filters":"Show Filters"}</button>

            {viewFilters && 
            <>
            <div className="flex flex-wrap">
                <p className="self-center">Category:</p> 
                {
                    categories.map((category, index) => (
                        <button 
                            key={index} 
                            onClick={() => {
                                if (selectedCategory !== "" && category===selectedCategory){setSelectedCategory("")}
                                else{setSelectedCategory(category)}
                            }} 
                            className={cn("text-foreground rounded-md p-2 m-2 transition-all duration-100", category===selectedCategory?"bg-light-black":"bg-dark-accent")}>
                                {category}
                        </button>
                    ))
                }
            </div>
            

            <div className="flex flex-wrap">
                <p className="self-center">Technology:</p> 
                {
                    technologies.map((tech, index) => (
                        <button 
                            key={index} 
                            onClick={() => {
                                if (selectedTech !== "" && tech===selectedTech){setSelectedTech("")}
                                else{setSelectedTech(tech)}
                            }} 
                            className={cn("text-foreground rounded-md p-2 m-2 my-1 transition-all duration-100", tech===selectedTech?"bg-light-black":"bg-dark-accent")}>
                                {tech}
                        </button>
                    ))
                }
            </div>
            </>
            }
        </div>
    );
}
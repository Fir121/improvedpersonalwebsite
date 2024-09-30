"use client"
import { projects, ProjectType } from "@/lib/projects";
import { DisplayCard } from "./project-card";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
            <h2>Filter</h2>
            <input type="text" placeholder="Search for a project" className="w-full p-3 border-2 border-gray-300 rounded-md text-black" onChange={(e) => setSearch(e.target.value)}/>

            {viewFilters && <button onClick={() => setViewFilters(false)} className="bg-cyan-500 text-white rounded-md p-2 m-2">Hide Filters</button>}
            {!viewFilters && <button onClick={() => setViewFilters(true)} className="bg-cyan-500 text-white rounded-md p-2 m-2">Show Filters</button>}

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
                            className={cn("text-white rounded-md p-2 m-2 transition-all duration-100", category===selectedCategory?"bg-cyan-700":"bg-cyan-500")}>
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
                            className={cn("text-white rounded-md p-2 m-2 transition-all duration-100", tech===selectedTech?"bg-cyan-700":"bg-cyan-500")}>
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

export function MainDisplay(){
    const [selectedId, setSelectedId] = useState<string|null>(null)
    const [projectsArr, setProjectsArr] = useState<ProjectType[]>(projects)

    return (
        <div className="relative min-h-screen">
            <div className="p-10">
                <h1 className="text-4xl font-bold w-100 text-center">MY WORK</h1>

                <p className="text-center md:block hidden">Here are some of the projects I've worked on over the years. Click on see more to learn more!</p>

                <SearchBar projectsArr={projectsArr} setProjectsArr={setProjectsArr}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 4xl:grid-cols-4 auto-rows-auto gap-4 p-10">
                {
                    projectsArr.map((project, index) => (
                        <DisplayCard project={project} key={index} index={project.shorttitle} selectedId={selectedId} setSelectedId={setSelectedId}/>
                    ))
                }
            </div>
        </div>
    );
}
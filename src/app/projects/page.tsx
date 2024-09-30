import { MainDisplay } from "@/components/display-projects";
import { DynamicNav } from "@/components/navbar";

export default function ProjectPage(){
    return (
        <div>
            <DynamicNav home={false}/>

            <MainDisplay/>
        </div>
    );
}
import { MainDisplay } from "@/components/display-projects";
import { DynamicNav } from "@/components/navbar";
import FaultyTerminal from '@/components/ui/FaultyTerminal';

export default function ProjectPage(){
    return (
        <div>
            <div
                className="opacity-25"
                style={{
                    position: 'fixed',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    pointerEvents: 'none',
                }}
                aria-hidden="true"
            >
                <FaultyTerminal
                    scale={1.5}
                    gridMul={[2, 1]}
                    digitSize={1.2}
                    timeScale={0.5}
                    pause={false}
                    scanlineIntensity={0.5}
                    glitchAmount={1}
                    flickerAmount={1}
                    noiseAmp={1}
                    chromaticAberration={0}
                    dither={0}
                    curvature={0.1}
                    tint="#a7ef9e"
                    mouseReact={false}
                    pageLoadAnimation={false}
                    brightness={0.6}
                />
            </div>

            <DynamicNav home={false}/>

            <MainDisplay/>
        </div>
    );
}
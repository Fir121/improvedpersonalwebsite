import { MainHeader } from "@/components/main-head";
import { DynamicNav } from "@/components/navbar";
import FaultyTerminal from '@/components/ui/FaultyTerminal';

export default function Home() {
  return (
    <div className="select-none">
      <DynamicNav home={true}/>

      <div className="relative min-h-screen">
        <div className="opacity-75 block" style={{ width: '100%', height: '100vh', position: 'relative' }}>
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
            mouseReact={true}
            mouseStrength={0.5}
            pageLoadAnimation={true}
            brightness={0.6}
          />
        </div>

        <div className="mt-5 md:mt-0 absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background-trans to-90% p-5 md:p-10 justify-center align-middle flex flex-col gap-7 text-center pointer-events-none">
          <MainHeader/>
        </div>
      </div>
    </div>
  );
}

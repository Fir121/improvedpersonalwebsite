import { MainHeader } from "@/components/main-head";
import { DynamicNav } from "@/components/navbar";
import { BackgroundSlider } from "@/components/project-slide-bg";

export default function Home() {
  return (
    <div className="select-none">
      <DynamicNav home={true}/>

      <div className="relative min-h-screen">
        <div className="opacity-50 hidden md:block">
          <BackgroundSlider time={75} cname="p-1 md:p-5"/>
          <BackgroundSlider time={65} cname="p-1 md:p-5"/>
          <BackgroundSlider time={55} cname="p-1 md:p-5"/>
          <BackgroundSlider time={45} cname="p-1 md:p-5"/>
        </div>

        <div className="mt-5 md:mt-0 absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background-trans to-60% p-5 md:p-10 justify-center align-middle flex flex-col gap-7 text-center pointer-events-none">
          <MainHeader/>
        </div>
      </div>
    </div>
  );
}

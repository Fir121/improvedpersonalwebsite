import { BackgroundSlider } from "@/components/project-slide-bg";
import { AnimText } from "@/components/typewriter";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="relative min-h-screen">
      <div className="opacity-0 md:opacity-60">
        <BackgroundSlider time={45} cname="p-1 md:p-5"/>
        <BackgroundSlider time={35} cname="p-1 md:p-5"/>
        <BackgroundSlider time={25} cname="p-1 md:p-5"/>
        <BackgroundSlider time={15} cname="p-1 md:p-5"/>
      </div>

      <div className="mt-5 md:mt-0 absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background-trans to-55% p-10 justify-center align-middle flex flex-col text-center">
        <Image src="/project-images/me.JPG" alt="me" width={100} height={100} className="aspect-square rounded-full mx-auto mb-7" />  
        <h1 className="text-6xl font-bold mb-7">Hello, {"I'm"} <b>Firas</b></h1>
        <AnimText delay={1} />
      </div>
    </div>

    ANBBASFIHASDF
    </>
  );
}

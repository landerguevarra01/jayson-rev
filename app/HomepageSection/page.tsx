import Header from "@/components/Header";
import Hero from "./herosection";
import Featured from "./featuredworks";
import Marquee from "./marquee";
import Remarks from "./remarks";
import Contact from "./contact";

export default function HomePage() {
  return (
    <>
      <div className="max-w-[1920px] h-auto flex flex-col justify-center items-center">
        <div className="pb-[80px]">
          <Hero />
        </div>
        {/* <div>
          <Header />
        </div> */}
        <div className="p-[80px]">
          <Featured />
        </div>
        <div className="flex flex-col justify-center items-center w-[1920px] p-[80px]">
          <Marquee />
        </div>
        <div className="p-[80px]">
          <Remarks />
        </div>
        {/*
        <div>
          <Contact />
        </div> */}
      </div>
    </>
  );
}

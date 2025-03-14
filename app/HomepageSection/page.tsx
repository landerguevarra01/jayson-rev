import Header from "@/components/Header";
import Hero from "./herosection";
import Featured from "./featuredworks";
import Marquee from "./marquee";
import Remarks from "./remarks";
import Contact from "./contact";

export default function HomePage() {
  return (
    <>
      <div className="">
        <div>
          <Hero />
        </div>
        {/* <div>
          <Header />
        </div>
        <div>
          <Featured />
        </div>
        <div>
          <Marquee />
        </div>
        <div>
          <Remarks />
        </div>
        <div>
          <Contact />
        </div> */}
      </div>
    </>
  );
}

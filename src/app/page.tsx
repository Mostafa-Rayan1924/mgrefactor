import About from "@/_components/Home/About";
import Faq from "@/_components/Home/Faq";
import Hero from "@/_components/Home/Hero";
import LatestPro from "@/_components/Home/LatestPro";
import ServicrsHome from "@/_components/Home/ServicrsHome";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="space-y-14 mb-10 lg:space-y-20">
        <About />
        <ServicrsHome />
        <LatestPro />
        <Faq />
      </div>
    </main>
  );
}

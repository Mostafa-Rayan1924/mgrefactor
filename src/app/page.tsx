import About from "@/_components/Home/About";
import Hero from "@/_components/Home/Hero";
import ServicrsHome from "@/_components/Home/ServicrsHome";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="space-y-10 md:space-y-14 mb-10 lg:space-y-20">
        <About />
        <ServicrsHome />
      </div>
    </main>
  );
}

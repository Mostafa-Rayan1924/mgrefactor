import About from "@/_components/Home/About";
import Faq from "@/_components/Home/Faq";
import Hero from "@/_components/Home/Hero";
import LatestPro from "@/_components/Home/LatestPro";
import ServicrsHome from "@/_components/Home/ServicrsHome";
import ContactForm from "@/_components/sharable/ContactForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "شركة إم جي | الصفحة الرئيسية",
  description: "شركة ام جي للمقاولات العامة واعمال البحر",
};
export default function Home() {
  return (
    <main>
      <Hero />
      <div className="space-y-14 mb-10 lg:space-y-20">
        <About />
        <ServicrsHome />
        <LatestPro />
        <Faq />
        <ContactForm />
      </div>
    </main>
  );
}

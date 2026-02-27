import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Process from "@/components/sections/process";
import Collection from "@/components/sections/collection";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="motif-divider" />
        <About />
        <div className="motif-divider" />
        <Process />
        <div className="motif-divider" />
        <Collection />
        <div className="motif-divider" />
        <Testimonials />
        <div className="motif-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

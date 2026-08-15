import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkLanes from "./components/WorkLanes";
import FeaturedWork from "./components/FeaturedWork";
import Projects from "./components/Projects";
import BlogPreview from "./components/BlogPreview";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function Divider() {
  return (
    <div style={{ height: "120px", width: "100%" }} aria-hidden="true" />
  );
}

export default function Home() {
  return (
    <>
      <main className="relative z-[1]">
        <Navbar />
        <Hero />
        <WorkLanes />
        <FeaturedWork />
        <Projects />
        <BlogPreview />
        <Divider />
        <Contact />
        <Divider />
        <About />
        <Footer />
      </main>
    </>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import VideoShowcase from "./components/VideoShowcase";
import BlogPreview from "./components/BlogPreview";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        <VideoShowcase />
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

import IntroLoader from "@/components/IntroLoader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeBand from "@/components/Marquee";
import About from "@/components/About";
import Categories from "@/components/Categories";
import ParallaxGallery from "@/components/ParallaxGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080c10]">
      <IntroLoader />
      <Header />
      <Hero />
      <MarqueeBand />
      <About />
      <Categories />
      <ParallaxGallery />
      <Footer />
    </main>
  );
}

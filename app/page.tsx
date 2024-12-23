import Footer from "@/components/footer/footer";
import Hero from "@/components/sections/hero";
import Navigation from "@/components/navigation/navigation";
import Sponsor from "@/components/sections/sponsor";
import Events from "@/components/sections/events";
import Team from "@/components/sections/team";
import About from "@/components/sections/about";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col max-w-full min-h-screen px-2 md:px-8">
      <Navigation />
      <main className="flex flex-col min-h-screen min-w-screen container px-1.5 md:px-2">
        <Hero />
        <About />
        <Events />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

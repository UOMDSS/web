import Footer from "@/components/footer/footer";
import Hero from "@/components/sections/hero";
import Navigation from "@/components/navigation/navigation";
import Sponsor from "@/components/sections/sponsor";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col max-w-full min-h-screen px-8">
      <Navigation />
      <main className="flex flex-col min-h-screen min-w-screen container">
        <Hero />
        <Sponsor />
      </main>
      <Footer />
    </div>
  );
}

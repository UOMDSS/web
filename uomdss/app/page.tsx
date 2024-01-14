import Navigation from "@/components/navigation/navigation";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col max-w-full min-h-screen px-8">
      <Navigation />
      <main className="flex min-h-screen min-w-screen container">Hello</main>
    </div>
  );
}

import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col max-w-full h-full px-24">
      <Navbar />
      <main className="flex min-h-screen min-w-screen flex-col items-left"></main>
    </div>
  );
}

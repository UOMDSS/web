import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-left p-24">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl">
        University of Manchester&apos;s Data Science Society
      </h1>
      <p className="md:text-2xl sm:text-lg pl-3">
        is rebuilding. We will be back soon!{" "}
        <span className="text-3xl">🚧</span>
      </p>
    </main>
  );
}

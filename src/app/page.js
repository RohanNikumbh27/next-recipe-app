import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-svh px-10 bg-transparent">
      <div className="animate-bg bg-colour-custom">.</div>
      <div className="flex flex-col mx-auto z-50 mb-20">
        <h1 className="text-4xl m-10 mx-auto font-bold bg-gradient-to-r from-zinc-700  to-zinc-950 text-transparent inline-block bg-clip-text ml-12">
          Welcome to Recipe App
        </h1>
        <Link
          className="mx-auto px-5 py-3 rounded text-zinc-200 font-semibold text-lg bg-zinc-900 animateButton overflow-hidden hover:scale-95"
          href={"/recipe-list"}
        >
          Explore Recipes
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="inline-flex flex-col items-center p-4">
        <h1 className="font-bold text-4xl">TEST</h1>
        <Link href="/blog">blog</Link>
      </div>
    </main>
  );
}

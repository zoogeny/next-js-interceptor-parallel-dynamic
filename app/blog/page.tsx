import Link from "next/link";

export default function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <Link href="/blog/first-post">First post</Link>
    </>
  );
}

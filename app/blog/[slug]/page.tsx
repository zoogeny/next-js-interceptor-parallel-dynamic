import Link from "next/link";

export default function Blog({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <div>params.slug: {slug}</div>
      <Link className="hover:text-gray-500" href="/blog/test">
        Same dir
      </Link>
      <br />
      <Link className="hover:text-gray-500" href="/blog/summary/test">
        Nested dir
      </Link>
    </div>
  );
}

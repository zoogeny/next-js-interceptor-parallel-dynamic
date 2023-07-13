import Link from "next/link";

export default function Blog({
  params: { slug, locale },
}: {
  params: { slug: string; locale: string };
}) {
  return (
    <div>
      <div>params.slug: {slug}</div>
      <div className="mb-2">params.locale: {locale}</div>

      <Link className="hover:text-gray-500" href={`/${locale}/blog/test`}>
        Same dir
      </Link>
      <br />
      <Link
        className="hover:text-gray-500"
        href={`/${locale}/blog/summary/test`}>
        Nested dir
      </Link>
    </div>
  );
}

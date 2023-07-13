import Link from "next/link";

export default function Blog({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <>
      <h1>Blog {locale}</h1>
      <Link href={`/${locale}/blog/first-post`}>First post</Link>
    </>
  );
}

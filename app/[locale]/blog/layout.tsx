export default function Layout({
  children,
  localeModal,
}: {
  children: React.ReactNode;
  localeModal: React.ReactNode;
}) {
  return (
    <>
      {children}
      {localeModal}
    </>
  );
}

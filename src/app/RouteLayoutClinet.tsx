import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Header.jsx"));
const Pagetransition = dynamic(() => import("../components/Pagetransiton.jsx"));
const StairTransition = dynamic(
  () => import("../components/StairTransition.jsx")
);

export default function RootLayoutClient({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <Header />
      <StairTransition />
      <Pagetransition>{children}</Pagetransition>
    </body>
  );
}

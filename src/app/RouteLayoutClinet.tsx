"use client";
import { useState } from "react";
import Header from "../components/Header.jsx";
import Pagetransition from "../components/Pagetransiton.jsx";
import StairTransition from "../components/StairTransition.jsx";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <body className={`${darkMode ? "dark" : ""}`}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <StairTransition />
      <Pagetransition>{children}</Pagetransition>
    </body>
  );
}

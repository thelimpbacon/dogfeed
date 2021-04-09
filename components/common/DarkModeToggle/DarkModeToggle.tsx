import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Dark, Light } from "../Icons";

interface DarkModeToggleProps {
  className?: string;
}

const DarkModeToggle = ({ className }: DarkModeToggleProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid Hydration Mismatch
  // Because we cannot know the theme on the server,
  // many of the values returned from useTheme will be
  //  undefined until mounted on the client.
  // This means if you try to render UI based on the current
  // theme before mounting on the client, you will see a hydration mismatch error.
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const onToggle = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <button className="focus:outline-none" onClick={onToggle}>
      {theme === "dark" ? (
        <Dark className={className} />
      ) : (
        <Light className={className} />
      )}
    </button>
  );
};

export default DarkModeToggle;

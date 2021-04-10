import Link from "next/link";
import { DarkModeToggle } from "..";
import s from "./Navbar.module.css";
import cn from "classnames";

const Navbar = () => {
  return (
    <div className={s.root}>
      <Link href="/">
        <a>
          <h2 className={cn(s.siteName, "dark:text-gray-50")}>Dog Feed</h2>
        </a>
      </Link>
      <div className="ml-auto">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Navbar;

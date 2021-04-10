import Link from "next/link";
import { Github } from "@components/common/Icons";
import { DarkModeToggle } from "@components/common";
import s from "./Navbar.module.css";
import cn from "classnames";

const Navbar = () => {
  return (
    <div className={s.root}>
      <div>
        <Link href="/">
          <a>
            <h2 className={cn(s.siteName, "dark:text-gray-50")}>Dog Feed</h2>
          </a>
        </Link>
      </div>
      <div className="flex space-x-4">
        <a href="https://github.com/thelimpbacon/dogfeed" target="_blank">
          <Github className="w-8 h-8 dark:text-gray-50" />
        </a>
        <DarkModeToggle className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Navbar;

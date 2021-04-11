import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import s from "./MobileNavbar.module.css";
import { Github, Home, Users } from "@components/common/Icons";
import { DarkModeToggle } from "@components/common";

const MobileNavbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={cn(s.root, "dark:border-gray-600 dark:border-t-[1px]")}>
      <div className={s.navButtonContainer}>
        <Link href="/">
          <a
            className={cn(s.navButton, {
              "text-blue-400": pathname === "/",
            })}
          >
            <Home />
          </a>
        </Link>

        <Link href="/users">
          <a
            className={cn(s.navButton, {
              "text-blue-400": pathname === "/users",
            })}
          >
            <Users />
          </a>
        </Link>

        <a
          className={s.navButton}
          href="https://github.com/thelimpbacon/dogfeed"
          target="_blank"
        >
          <Github className="w-6 h-6 dark:text-gray-50" />
        </a>

        <div className={s.navButton}>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;

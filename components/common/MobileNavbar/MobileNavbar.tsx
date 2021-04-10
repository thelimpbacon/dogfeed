import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import s from "./MobileNavbar.module.css";
import { Home, Profile, Users } from "@components/common/Icons";
import { DarkModeToggle } from "@components/common";

const MobileNavbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={cn(s.root, "dark:border-gray-600 dark:border-t-[1px]")}>
      <div className="flex items-center justify-between flex-1 h-full">
        <Link href="/">
          <a className="h-full">
            <button
              className={cn("h-full px-6", {
                "bg-blue-100 dark:bg-gray-200 dark:bg-opacity-20":
                  pathname === "/",
              })}
            >
              <Home />
            </button>
          </a>
        </Link>
        <button className="px-6">
          <Profile />
        </button>

        <Link href="/users">
          <a className="h-full">
            <button
              className={cn("h-full px-6", {
                "bg-blue-100 dark:bg-gray-200 dark:bg-opacity-20":
                  pathname === "/users",
              })}
            >
              <Users />
            </button>
          </a>
        </Link>

        <div className="flex items-center h-full px-6">
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;

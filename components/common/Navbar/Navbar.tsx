import Link from "next/link";
import { DarkModeToggle } from "..";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.root}>
      <Link href="/">
        <a>Navbar</a>
      </Link>
      <div className="ml-auto">
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Navbar;

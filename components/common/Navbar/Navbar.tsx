import Link from "next/link";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.root}>
      <Link href="/">
        <a>Navbar</a>
      </Link>
    </div>
  );
};

export default Navbar;

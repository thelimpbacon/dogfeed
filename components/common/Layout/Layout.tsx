import { ReactNode } from "react";
import { Navbar, MobileNavbar } from "@components/common/";
import cn from "classnames";
import s from "./Layout.module.css";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={cn(s.root, "dark:text-white")}>
      <Navbar />
      <section className={s.content}>{children}</section>
      <MobileNavbar />
    </div>
  );
};

export default Layout;

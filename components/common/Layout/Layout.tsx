import { ReactNode } from "react";
import { Navbar, MobileNavbar } from "@components/common/";
import s from "./Layout.module.css";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={s.root}>
      <Navbar />
      <section className={s.content}>{children}</section>
      <MobileNavbar />
    </div>
  );
};

export default Layout;

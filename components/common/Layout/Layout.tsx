import { ReactNode } from "react";
import Footer from "@components/common/Footer";
import Navbar from "@components/common/Navbar";
import s from "./Layout.module.css";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={s.root}>
      <Navbar />
      <section className={s.content}>{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;

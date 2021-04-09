import { Avatar } from "@components/common";
import Image from "next/image";
import cn from "classnames";
import s from "./LeftSideBar.module.css";
import {
  Home,
  Posts,
  Profile,
  Settings,
  Users,
} from "@components/common/Icons";

const LeftSideBar = () => {
  return (
    <div className={s.root}>
      <div className={s.user}>
        <Avatar
          className="border-4 rounded-full w-[5rem] h-[5rem] "
          src="https://res.cloudinary.com/mount-then-bike-bohol/image/upload/v1617809671/UNADJUSTEDNONRAW_thumb_b54_qezl6e.jpg"
          alt="vaughn dalde"
        />
        <div className="ml-3 text-center">
          <h2 className="lg:text-xl  xl:text-[2rem] font-semibold">
            Vaughn Dalde
          </h2>
          <p className="mt-1 text-sm">vaughn_dalde@icloud.com</p>
        </div>
      </div>

      <div className={s.buttonContainer}>
        <button className={cn(s.button, { "bg-blue-500 bg-opacity-20": true })}>
          <Home className={s.icon} />
          Home
        </button>
        <button className={s.button}>
          <Profile className={s.icon} />
          My Profile
        </button>
        <button className={s.button}>
          <Posts className={s.icon} />
          Posts
        </button>
        <button className={s.button}>
          <Users className={s.icon} />
          Friends
        </button>
        <button className={s.button}>
          <Settings className={s.icon} />
          Settings
        </button>
      </div>
    </div>
  );
};

export default LeftSideBar;

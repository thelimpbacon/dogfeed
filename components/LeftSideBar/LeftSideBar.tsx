import { Avatar } from "@components/common";
import Image from "next/image";
import cn from "classnames";
import s from "./LeftSideBar.module.css";

const LeftSideBar = () => {
  return (
    <div className={s.root}>
      <div className={s.user}>
        <Avatar
          className="border-4 rounded-full w-[5rem] h-[5rem] "
          // src="https://randomuser.me/api/portraits/women/3.jpg"
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline w-6 h-6 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Home
        </button>
        <button className={s.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline w-6 h-6 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          My Profile
        </button>
        <button className={s.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline w-6 h-6 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Posts
        </button>
        <button className={s.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline w-6 h-6 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Friends
        </button>
        <button className={s.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline w-6 h-6 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
          Settings
        </button>
      </div>
    </div>
  );
};

export default LeftSideBar;

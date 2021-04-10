import s from "./PostPlaceholder.module.css";
import cn from "classnames";

const PostPlaceholder = () => {
  return (
    <div className={s.root}>
      <div className={cn(s.topInfo, "dark:bg-gray-700")}>
        <div className="flex items-center space-x-2 animate-pulse">
          <div className="w-10 h-10 bg-gray-400 rounded-full dark:bg-gray-300"></div>
          <div className="w-1/3">
            <div className="w-full h-5 mb-1 bg-gray-400 dark:bg-gray-300"></div>
            <div className="w-3/4 h-3 bg-gray-400 dark:bg-gray-300"></div>
          </div>
        </div>
        <div className="w-5/6 h-5 mt-2 mb-1 bg-gray-400 animate-pulse dark:bg-gray-300"></div>
      </div>

      <div className={cn(s.bottomInfo, "dark:bg-gray-700")}>
        <span className="flex w-1/3 space-x-2 animate-pulse">
          <span className="w-[10%] h-5 bg-gray-400 dark:bg-gray-300"></span>
          <span className="w-[20%] h-5 bg-gray-400 dark:bg-gray-300"></span>
        </span>
        <span className="flex w-1/3 ml-auto space-x-3 animate-pulse">
          <span className={cn(s.tagPill, "dark:bg-gray-300")}></span>
          <span className={cn(s.tagPill, "dark:bg-gray-300")}></span>
          <span className={cn(s.tagPill, "dark:bg-gray-300")}></span>
        </span>
      </div>
    </div>
  );
};

export default PostPlaceholder;

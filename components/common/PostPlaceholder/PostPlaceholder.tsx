import s from "./PostPlaceholder.module.css";

const PostPlaceholder = () => {
  return (
    <div className={s.root}>
      <div className={s.topInfo}>
        <div className="flex items-center space-x-2 animate-pulse">
          <div className="w-10 h-10 bg-gray-400 rounded-full "></div>
          <div className="w-1/3">
            <div className="w-full h-5 mb-1 bg-gray-400"></div>
            <div className="w-3/4 h-3 bg-gray-400 "></div>
          </div>
        </div>
        <div className="w-5/6 h-5 mt-2 mb-1 bg-gray-400 animate-pulse"></div>
      </div>

      <div className={s.bottomInfo}>
        <span className="flex w-1/3 space-x-2 animate-pulse">
          <span className="w-[10%] h-5 bg-gray-400"></span>
          <span className="w-[20%] h-5 bg-gray-400"></span>
        </span>
        <span className="flex w-1/3 ml-auto space-x-3 animate-pulse">
          <span className={s.tagPill}></span>
          <span className={s.tagPill}></span>
          <span className={s.tagPill}></span>
        </span>
      </div>
    </div>
  );
};

export default PostPlaceholder;

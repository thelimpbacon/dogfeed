import s from "./UserBannerPlaceholder.module.css";

const UserBannerPlaceholder = () => {
  return (
    <div className={s.root}>
      <div className={s.head}>
        <div className="w-20 h-20 bg-gray-400 rounded-full animate-pulse" />
        <h2 className="w-2/3 h-6 mt-2 bg-gray-400 lg:h-8 animate-pulse"></h2>
        <p className="w-3/4 h-4 mt-1 bg-gray-400 animate-pulse"></p>
      </div>
      <div className={s.rest}></div>
    </div>
  );
};

export default UserBannerPlaceholder;

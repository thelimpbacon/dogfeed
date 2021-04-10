import { useQuery } from "@apollo/client";
import { USERFULL, UserFullData, UserVar } from "@lib/tags";
import { format } from "timeago.js";
import { Avatar } from "..";
import UserBannerPlaceholder from "../UserBannerPlaceholder";
import cn from "classnames";
import s from "./UserBanner.module.css";

const UserBanner = ({ userId }: { userId: string }) => {
  const { data, loading, error } = useQuery<UserFullData, UserVar>(USERFULL, {
    variables: { id: userId },
  });

  if (loading) {
    return <UserBannerPlaceholder />;
  }

  if (error) {
    return (
      <div className={s.root}>
        <div className={s.head}>
          <p className="text-lg dark:text-black">😞 Error loading user</p>
        </div>
        <div className={cn(s.rest, "h-[9em]")}></div>
      </div>
    );
  }

  return (
    <div className={s.root}>
      <div className={s.head}>
        <Avatar
          className="w-20 h-20 border-[6px] rounded-full"
          src={data.user.picture}
          alt={data.user.firstName}
        />
        <div className="ml-3 text-center">
          <h2 className="lg:text-xl  xl:text-[2rem] font-semibold">
            {` ${data.user.firstName} ${data.user.lastName}`}
          </h2>
          <p className="mt-1 text-sm">{data.user.email}</p>
        </div>
      </div>
      <div className={s.rest}>
        <p>Gender: {data.user.gender}</p>
        <p>Phone: {data.user.phone}</p>
        <p>Registered: {format(data.user.registerDate)}</p>
        <p>
          Location:{" "}
          {`${data.user.location.city}, ${data.user.location.country}`}
        </p>
      </div>
    </div>
  );
};

export default UserBanner;

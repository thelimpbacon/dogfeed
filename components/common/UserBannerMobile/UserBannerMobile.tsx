import { useQuery } from "@apollo/client";
import { USER, UserData, UserVar } from "@lib/tags";
import { Avatar } from "@components/common";
import s from "./UserBannerMobile.module.css";

interface Props {
  userId: string;
}

const UserBannerMobile = ({ userId }: Props) => {
  const { data, loading, error } = useQuery<UserData, UserVar>(USER, {
    variables: { id: userId },
  });

  if (loading) {
    return (
      <div className={s.root}>
        <div className="w-16 h-16 bg-gray-400 border rounded-full animate-pulse" />
        <div className="font-semibold bg-gray-400 h-[28px] animate-pulse w-2/3 mb-1"></div>
        <div className="bg-gray-400 animate-pulse h-[16px] w-1/2"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={s.root}>
        <h5 className="text-sm">😞 An error occured while fetching user.</h5>
      </div>
    );
  }

  return (
    <div className={s.root}>
      <Avatar
        className="w-16 h-16 border rounded-full"
        src={data.user.picture}
        alt={data.user.firstName}
      />
      <h4 className="text-lg font-semibold">{`${data.user.firstName} ${data.user.lastName}`}</h4>
      <p className="text-xs">{data.user.email}</p>
    </div>
  );
};

export default UserBannerMobile;

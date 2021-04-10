import { UserBanner, UserBannerMobile } from "@components/common";
import UserFeed from "@components/UserFeed";

const User = ({ uid }: { uid: string }) => {
  return (
    <div className="flex md:grid md:grid-cols-4">
      <aside className="sticky hidden h-screen grid-cols-1 top-20 lg:flex">
        <div className="flex-1 px-2">
          <UserBanner userId={uid} />
        </div>
      </aside>
      <div className="w-full col-span-4 lg:col-span-2">
        <UserBannerMobile userId={uid} />
        <UserFeed userId={uid} />
      </div>
    </div>
  );
};

export default User;

export const getServerSideProps = ({ query }) => {
  return { props: { uid: query.uid as string } };
};

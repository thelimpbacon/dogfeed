import { useQuery } from "@apollo/client";
import Link from "next/link";
import { Avatar, UserListPlaceholder } from "@components/common";
import { USERS, UsersData, UsersVar } from "@lib/tags";
import s from "./RightSideBarUser.module.css";
import cn from "classnames";

const NUMBEROFUSERS = 7;

const RightSideBarUser = () => {
  const { data, loading, error } = useQuery<UsersData, UsersVar>(USERS, {
    variables: {
      page: 10,
      limit: NUMBEROFUSERS,
    },
  });

  if (loading) {
    return (
      <div className={s.root}>
        <h5 className={s.title}>Top users</h5>
        <div className="px-6 py-2">
          <ul>
            {[...Array(NUMBEROFUSERS)].map((_, index) => (
              <li key={index} className="mb-2">
                <UserListPlaceholder />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn(s.root, "h-[20em]")}>
        <h5 className={s.title}>Top users</h5>
        <p className="px-6 py-2">😞 Error loading users.</p>
      </div>
    );
  }

  return (
    <div className={s.root}>
      <h5 className={s.title}>Top users</h5>
      <div className="px-6 py-2">
        <ul>
          {data?.users?.data.map((user) => {
            return (
              <li key={user.id} className="flex items-center">
                <Avatar
                  className="inline w-10 h-10 border-2 rounded-full"
                  src={user.picture}
                  alt={user.email}
                />
                <Link href={`/user/${user.id}`}>
                  <a>
                    <span className="flex-1 my-3 ml-2">
                      {user.firstName} {user.lastName}
                    </span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RightSideBarUser;

import Feed from "@components/Feed";
import LeftSideBar from "@components/LeftSideBar";
import RightSideBarUser from "@components/RightSideBarUser";

const Home = () => {
  return (
    <div className="flex md:grid md:grid-cols-4">
      <aside className="sticky hidden h-screen grid-cols-1 top-20 lg:flex">
        <div className="flex-1 px-2">
          <LeftSideBar />
        </div>
      </aside>
      <div className="w-full col-span-4 lg:col-span-2">
        <Feed />
      </div>
      <aside className="sticky hidden h-screen top-20 lg:flex">
        <div className="flex-1 px-2 ">
          <RightSideBarUser />
        </div>
      </aside>
    </div>
  );
};

export default Home;

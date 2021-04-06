import Feed from "@components/Feed";

const Home = () => {
  return (
    <div className="flex md:grid md:grid-cols-4">
      <aside className="sticky hidden h-screen top-20 md:flex">Left</aside>
      <div className="col-span-2 ">
        <Feed />
      </div>
      <aside className="sticky hidden h-screen top-20 md:flex">Right</aside>
    </div>
  );
};

export default Home;

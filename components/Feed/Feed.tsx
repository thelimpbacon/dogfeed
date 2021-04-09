import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useInView } from "react-intersection-observer";
import { POSTS, PostsData, PostsVar } from "@lib/tags";
import { Post, PostPlaceholder } from "@components/common";

const Feed = () => {
  const { data, loading, error, fetchMore, refetch, networkStatus } = useQuery<
    PostsData,
    PostsVar
  >(POSTS, {
    variables: { page: 30, limit: 5 },
    notifyOnNetworkStatusChange: true,
  });

  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "100px",
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      fetchMore({ variables: { page: data?.posts?.page + 1 } });
    }
  }, [inView]);

  if ((loading && networkStatus === 4) || (loading && networkStatus === 1)) {
    return (
      <div className="flex flex-col items-center min-h-screen">
        <PostPlaceholder />
        <PostPlaceholder />
        <PostPlaceholder />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center min-h-screen">
        <h5 className="text-lg">😞 An error occured while fetching posts.</h5>
        <button
          className="underline focus:outline-none"
          onClick={() => refetch()}
        >
          Try again?
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center overflow-hidden">
      {data?.posts?.data?.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
      <div ref={ref} className="h-[40vh] w-full flex justify-center">
        <PostPlaceholder />
      </div>
    </div>
  );
};

export default Feed;

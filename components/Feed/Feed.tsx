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
    variables: { page: 1, limit: 15 },
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
      <div className="flex flex-col items-center min-h-screen py-2 md:py-0">
        <PostPlaceholder />
        <PostPlaceholder />
        <PostPlaceholder />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center min-h-screen py-2 mt-4 md:py-0">
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
    <div className="flex flex-col items-center py-2 overflow-hidden md:py-0">
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

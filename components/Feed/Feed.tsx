import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useInView } from "react-intersection-observer";
import { POSTS } from "@lib/tags";
import { Post } from "@components/common";
import { PostType } from "@lib/types";

const Feed = () => {
  const { data, loading, error, fetchMore } = useQuery(POSTS, {
    variables: { page: 20, limit: 5 },
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

  if (error) {
    return <div className="min-h-screen">An error occured.</div>;
  }

  if (loading) {
    return <div className="min-h-screen">loading</div>;
  }

  return (
    <div className="flex flex-col items-center">
      {data?.posts?.data?.map((post: PostType) => {
        return <Post key={post.id} post={post} />;
      })}
      <div ref={ref} className="h-[4em]">
        Loading more posts...
      </div>
    </div>
  );
};

export default Feed;

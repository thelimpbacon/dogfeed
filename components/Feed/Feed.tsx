import { Post } from "@components/common";
import { PostType } from "@lib/types";

interface Props {
  posts: PostType[];
}

const Feed = ({ posts }: Props) => {
  return (
    <div className="flex flex-col items-center">
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Feed;

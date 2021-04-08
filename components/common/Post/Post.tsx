import Image from "next/image";
import { PostType } from "@lib/types";
import { Avatar } from "@components/common";
import { format } from "timeago.js";
import s from "./Post.module.css";
import Link from "next/link";

const Post = ({ post }: { post: PostType }) => {
  return (
    <div className={s.root}>
      <div className={s.topInfo}>
        <Link href={`/user/${post.owner.id}`}>
          <a>
            <div className="flex items-center mb-2">
              <Avatar src={post.owner.picture} />
              <div className="ml-2">
                <div className="block py-0">
                  {post.owner.firstName} {post.owner.lastName}
                </div>
                <div className="text-xs">{format(post.publishDate)}</div>
              </div>
            </div>
          </a>
        </Link>
        <h5 className={s.postText}>{post.text}</h5>
      </div>
      <div className={s.imageContainer}>
        <Image
          className="object-cover"
          src={post.image}
          alt={post.text}
          height={500}
          width={800}
          layout="responsive"
        />
      </div>
      <div className={s.bottomInfo}>
        <span className="flex items-center">
          <svg
            className="inline w-6 h-6 mr-1 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          {post.likes}
        </span>
        <span className="ml-auto">
          {post.tags.map((tag, index) => {
            return (
              <span className={s.tagPill} key={`${tag}-${index}`}>
                {tag}
              </span>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default Post;

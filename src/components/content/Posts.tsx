import { Post, PostProps } from "./Post";

import barked from "../../assets/img/post/barked.png";
import meow from "../../assets/img/post/meow.png";
import meow2 from "../../assets/img/post/meow2.png";

import barkedUser from "../../assets/img/users/adorable.png";
import meowUser from "../../assets/img/users/small.png";

export function Posts() {
  const postsData: PostProps[] = [
    {
      user: "barked",
      userImage: barkedUser,
      image: barked,
    },
    {
      user: "meow",
      userImage: meowUser,
      image: meow,
    },
    {
      user: "meow",
      userImage: meowUser,
      image: meow2,
    },
  ];

  return (
    <section className="posts">
      {postsData.map((post) => {
        return (
          <Post
            user={post.user}
            image={post.image}
            userImage={post.userImage}
          />
        );
      })}
    </section>
  );
}

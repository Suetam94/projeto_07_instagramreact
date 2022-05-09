import {
  BookmarkSimple,
  ChatCircle,
  DotsThree,
  Heart,
  PaperPlaneTilt,
} from "phosphor-react";

export interface PostProps {
  user: string;
  userImage: string;
  image: string;
}

import respondeAi from "../../../assets/img/story/respondeai.png";
import { useState } from "react";

export function Post({ user, userImage, image }: PostProps) {
  const [isPostLiked, setIsPostLiked] = useState(false);

  return (
    <div className="post">
      <div className="heading">
        <div className="user">
          <a href="src/components/content/posts/Post#">
            <img src={userImage} alt={user} />
          </a>
          <a href="src/components/content/posts/Post#">
            <span>{user}</span>
          </a>
        </div>
        <div className="options">
          <DotsThree />
        </div>
      </div>
      <div className="body">
        <img src={image} alt={user} />
      </div>
      <div className="footer">
        <div className="icons">
          {isPostLiked ? (
            <Heart
              onClick={() => setIsPostLiked(!isPostLiked)}
              weight={"fill"}
              color={"#FD1D1D"}
              className="post-icon"
            />
          ) : (
            <Heart
              onClick={() => setIsPostLiked(!isPostLiked)}
              className="post-icon"
            />
          )}
          <ChatCircle className="post-icon" />
          <PaperPlaneTilt className="post-icon" />
          <BookmarkSimple className="post-icon" />
        </div>
        <div className="thumbs">
          <img src={respondeAi} alt="Curtido" />
          <span>
            Curtido por <strong>respondeai</strong> e
            <strong>outras 101.523 pessoas</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

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

import respondeAi from "../../assets/img/story/respondeai.png";

export function Post({ user, userImage, image }: PostProps) {
  return (
    <div className="post">
      <div className="heading">
        <div className="user">
          <a href="#">
            <img src={userImage} alt={user} />
          </a>
          <a href="#">
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
          <Heart />
          <ChatCircle />
          <PaperPlaneTilt />
          <BookmarkSimple />
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

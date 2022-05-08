import { Story, StoryProps } from "./Story";

import _9gag from "../../assets/img/story/9gag.png";
import barked from "../../assets/img/story/barked.png";
import filo from "../../assets/img/story/filo.png";
import meme from "../../assets/img/story/meme.png";
import meowed from "../../assets/img/story/meowed.png";
import respondeAi from "../../assets/img/story/respondeai.png";
import wawa from "../../assets/img/story/wawa.png";

export function Stories() {
  const storiesData: StoryProps[] = [
    {
      user: "9gag",
      image: _9gag,
    },
    {
      user: "barked",
      image: barked,
    },
    {
      user: "filo",
      image: filo,
    },
    {
      user: "meme",
      image: meme,
    },
    {
      user: "meowed",
      image: meowed,
    },
    {
      user: "responde ai",
      image: respondeAi,
    },
    {
      user: "wawa",
      image: wawa,
    },
  ];

  return (
    <section className="stories">
      {storiesData.map((story, index) => {
        return <Story key={index} user={story.user} image={story.image} />;
      })}
    </section>
  );
}

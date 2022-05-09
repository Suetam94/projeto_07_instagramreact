export interface StoryProps {
  user: string;
  image: string;
}

export function Story({ user, image }: StoryProps) {
  return (
    <div className="story">
      <div className="background">
        <img src={image} alt="9gag" />
      </div>
      <span>{user}</span>
    </div>
  );
}

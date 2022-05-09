interface SuggestionsProps {
  user: string;
  image: string;
}

export function Suggestions(props: SuggestionsProps) {
  return (
    <div className="suggestion">
      <div className="user">
        <img src={props.image} alt={props.user} />
        <div className="user-data">
          <span>{props.user}</span>
          <span>Segue você</span>
        </div>
      </div>
      <a href="#">Seguir</a>
    </div>
  );
}

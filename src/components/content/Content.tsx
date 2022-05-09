import { Stories } from "./Stories";
import { Posts } from "./Posts";

export function Content() {
  return (
    <main>
      <div className="content-container container">
        <div className="content">
          <Stories />
          <Posts />
        </div>
      </div>
    </main>
  );
}

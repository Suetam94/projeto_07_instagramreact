import { Stories } from "./stories/Stories";
import { Posts } from "./posts/Posts";
import { Sidebar } from "./sidebar/Sidebar";

export function Content() {
  return (
    <main>
      <div className="content-container container">
        <div className="content">
          <Stories />
          <Posts />
          <Sidebar />
        </div>
      </div>
    </main>
  );
}

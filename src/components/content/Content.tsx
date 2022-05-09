import { Stories } from "./stories/Stories";
import { Posts } from "./posts/Posts";
import { Sidebar } from "./sidebar/Sidebar";
import { MobileBar } from "./mobile/MobileBar";

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
      <MobileBar />
    </main>
  );
}

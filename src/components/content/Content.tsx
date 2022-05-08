import {Stories} from "./Stories";

export function Content() {
    return (
        <main>
            <div className="content-container container">
                <div className="content">
                    <Stories />
                </div>
            </div>
        </main>
    );
}
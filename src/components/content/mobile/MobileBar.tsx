import {HeartStraight, House, MagnifyingGlass, PlusCircle, User} from "phosphor-react";

export function MobileBar() {
    return (
        <div className="mobile-bar">
            <div className="icons">
                <a href="#">
                    <House className="mobile-icon" />
                </a>
                <a href="#">
                    <MagnifyingGlass className="mobile-icon" />
                </a>
                <a href="#">
                    <PlusCircle className="mobile-icon" />
                </a>
                <a href="#">
                    <HeartStraight className="mobile-icon" />
                </a>
                <a href="#">
                    <User className="mobile-icon" />
                </a>
            </div>
        </div>
    );
}
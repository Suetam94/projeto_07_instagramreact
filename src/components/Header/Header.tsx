import {
  Compass,
  Heart,
  InstagramLogo,
  PaperPlaneTilt,
  User,
} from "phosphor-react";
import instagramLogo from "../../assets/img/instagram/logo.png";

export function Header() {
  return (
    <header>
      <div className="header container">
        <div className="logo">
          <div className="icon">
            <InstagramLogo className="logo-icon" width={22} height={22} />
          </div>
          <div className="name">
            <a href="#">
              <img src={instagramLogo} alt="Instagram logo" />
            </a>
          </div>
        </div>
        <form className="search-bar">
          <input type="text" placeholder="Pesquisar" />
        </form>
        <div className="icons-bar">
          <PaperPlaneTilt className="interactive-bar" width={22} height={22} />
          <Compass className="interactive-bar" width={22} height={22} />
          <Heart className="interactive-bar" width={22} height={22} />
          <User className="interactive-bar" width={22} height={22} />
        </div>
      </div>
    </header>
  );
}

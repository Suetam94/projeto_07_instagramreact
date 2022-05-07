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
            <InstagramLogo width={22} height={22} />
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
          <PaperPlaneTilt width={22} height={22} />
          <Compass width={22} height={22} />
          <Heart width={22} height={22} />
          <User width={22} height={22} />
        </div>
      </div>
    </header>
  );
}

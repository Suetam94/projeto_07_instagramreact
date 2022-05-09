import { Suggestions } from "./Suggestions";
import { HelpOptions } from "./HelpOptions";

import catana from "../../../assets/img/users/catana.png";

import badVibes from "../../../assets/img/users/bad-vibes.png";
import chib from "../../../assets/img/users/chib.png";
import razoes from "../../../assets/img/users/razoes.png";
import adorable from "../../../assets/img/users/adorable.png";
import small from "../../../assets/img/users/small.png";

export function Sidebar() {
  const suggetionsData = [
    {
      user: "bad.vibes.memes",
      image: badVibes,
    },
    {
      user: "chibirdart",
      image: chib,
    },
    {
      user: "razoesparaacreditar",
      image: razoes,
    },
    {
      user: "adorable_animals",
      image: adorable,
    },
    {
      user: "smallcutecats",
      image: small,
    },
  ];

  const helpOptions = [
    "Sobre",
    "Ajuda",
    "Imprensa",
    "API",
    "Carreiras",
    "Privacidade",
    "Termos",
    "Localizações",
    "Contas mais relevantes",
    "Hashtags",
    "Idioma",
  ];

  return (
    <div className="sidebar">
      <div className="user-info">
        <img src={catana} alt="User Catana Comics" />
        <div>
          <span>catanacomics</span>
          <span>Catana</span>
        </div>
      </div>
      <div className="suggestions">
        <div className="heading">
          <span>Sugestões para você</span>
          <span>Ver tudo</span>
        </div>
        <div className="suggestions-body">
          {suggetionsData.map((suggestion) => {
            return (
              <Suggestions user={suggestion.user} image={suggestion.image} />
            );
          })}
        </div>
        <div className="footer">
          <div className="help">
            {helpOptions.map((option) => {
              return <HelpOptions option={option} />;
            })}
          </div>
          <div className="copyright">
            <span>© 2022 INSTAGRAM DO FACEBOOK</span>
          </div>
        </div>
      </div>
    </div>
  );
}

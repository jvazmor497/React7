import { useState, useEffect } from "react";
import "./App.css";

const baseUrl = import.meta.env.BASE_URL;

const champions = [
  "Aatrox",
  "Ahri",
  "Akali",
  "Alistar",
  "Amumu",
  "Anivia",
  "Annie",
  "Aphelios",
  "Ashe",
  "AurelionSol",
  "Azir",
  "Bard",
  "Blitzcrank",
  "Brand",
  "Braum",
  "Caitlyn",
  "Camille",
  "Cassiopeia",
  "Chogath",
  "Corki",
  "Darius",
  "Diana",
  "Draven",
  "DrMundo",
  "Ekko",
  "Elise",
  "Evelynn",
  "Ezreal",
  "Fiddlesticks",
  "Fiora",
  "Fizz",
  "Galio",
  "Gangplank",
  "Garen",
  "Gnar",
  "Gragas",
  "Graves",
  "Gwen",
  "Hecarim",
  "Heimerdinger",
  "Illaoi",
  "Irelia",
  "Ivern",
  "Janna",
  "JarvanIV",
  "Jax",
  "Jayce",
  "Jhin",
  "Jinx",
  "Kaisa",
  "Kalista",
  "Karma",
  "Karthus",
  "Kassadin",
  "Katarina",
  "Kayle",
  "Kayn",
  "Kennen",
  "Khazix",
  "Kindred",
  "Kled",
  "KogMaw",
  "Leblanc",
  "LeeSin",
  "Leona",
  "Lillia",
  "Lissandra",
  "Lucian",
  "Lulu",
  "Lux",
  "Malphite",
  "Malzahar",
  "Maokai",
  "MasterYi",
  "MissFortune",
  "Mordekaiser",
  "Morgana",
  "Nami",
  "Nasus",
  "Nautilus",
  "Neeko",
  "Nidalee",
  "Nocturne",
  "Nunu",
  "Olaf",
  "Orianna",
  "Ornn",
  "Pantheon",
  "Poppy",
  "Pyke",
  "Qiyana",
  "Quinn",
  "Rakan",
  "Rammus",
  "RekSai",
  "Rell",
  "Renekton",
  "Rengar",
  "Riven",
  "Rumble",
  "Ryze",
  "Samira",
  "Sejuani",
  "Senna",
  "Seraphine",
  "Sett",
  "Shaco",
  "Shen",
  "Shyvana",
  "Singed",
  "Sion",
  "Sivir",
  "Skarner",
  "Sona",
  "Soraka",
  "Swain",
  "Sylas",
  "Syndra",
  "TahmKench",
  "Taliyah",
  "Talon",
  "Taric",
  "Teemo",
  "Thresh",
  "Tristana",
  "Trundle",
  "Tryndamere",
  "TwistedFate",
  "Twitch",
  "Udyr",
  "Urgot",
  "Varus",
  "Vayne",
  "Veigar",
  "Velkoz",
  "Vex",
  "Vi",
  "Viego",
  "Viktor",
  "Vladimir",
  "Volibear",
  "Warwick",
  "MonkeyKing",
  "Xayah",
  "Xerath",
  "XinZhao",
  "Yasuo",
  "Yone",
  "Yorick",
  "Yuumi",
  "Zac",
  "Zed",
  "Ziggs",
  "Zilean",
  "Zoe",
  "Zyra",
];

function App() {
  // Cachea todas las imagenes en el navegador para que carguen más rapido cuando sea necesario
  useEffect(() => {
    champions.forEach((champ) => {
      const img = new Image();
      if (champ === "Viktor") {
        img.src =
          "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/viktor/skins/base/images/viktor_splash_tile_0.viktorvgu.jpg";
      } else {
        img.src = `https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/${champ}.png`;
      }
    });
  }, []);

  return <ChampionCard />;
}

function ChampionCard() {
  const [champion, setChampion] = useState(
    champions[Math.floor(Math.random() * champions.length)]
  );

  const [rerollButtonimage, setRerollButtonimage] = useState(
    `${baseUrl}images/ui/button-lockin.png`
  );
  const [rerollDiceimage, setRerollDiceimage] = useState(`${baseUrl}images/ui/dice.png`);

  let champ_image = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/${champion.toLowerCase()}/skins/base/images/${champion.toLowerCase()}_splash_tile_0.jpg`;

  if (champion === "MonkeyKing") {
    setChampion("Wukong");
  }

  if (champion === "Viktor") {
    champ_image =
      "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/viktor/skins/base/images/viktor_splash_tile_0.viktorvgu.jpg";
  }

  return (
    <div
      className="card"
      onClick={() =>
        setChampion(champions[Math.floor(Math.random() * champions.length)])
      }
      onMouseEnter={() => {
        setRerollButtonimage(`${baseUrl}images/ui/button-lockin-hover.png`);
        setRerollDiceimage(`${baseUrl}images/ui/dice-hover.png`);
      }}
      onMouseLeave={() => {
        setRerollButtonimage(`${baseUrl}images/ui/button-lockin.png`);
        setRerollDiceimage(`${baseUrl}images/ui/dice-hover.png`);
      }}
    >
      <img className="imgChamp" src={champ_image} alt={champion} />
      <img className="imgblur" src={champ_image} alt={champion} />
      <h2>{champion}</h2>
      <div className="rerollComponent">
        <img className="rerollButton" src={rerollButtonimage} alt="button" />
        <img className="rerollDice" src={rerollDiceimage} alt="dice" />
      </div>
    </div>
  );
}

export default App;

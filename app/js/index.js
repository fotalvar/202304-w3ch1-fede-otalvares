import { characters } from "./characters/characters.js";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent.js";
import ImageComponent from "./components/ImageComponent/ImageComponent.js";
import CardComponent from "./components/CardComponent/CardComponent.js";

const app = document.querySelector(".app");

new CardComponent(app);

const speakButton = new ButtonComponent(app, "speak", "character__action");

const dieButton = new ButtonComponent(app, "die", "character__action");

const bronnImg = new ImageComponent(
  app,
  "Foto de un personaje",
  "../img/bronn.jpg",
  "character__picture"
);

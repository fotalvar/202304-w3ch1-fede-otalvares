import CardListComponent from "./components/CardListComponent/CardListComponent.js";
import { characters } from "./characters/characters.js";

const mainContainer = document.querySelector(".app");

new CardListComponent(
  mainContainer,
  "characters-list row list-unstyled",
  characters
);

import CardListComponent from "./components/CardListComponent/CardListComponent.js";
import { characters } from "./characters/characters.js";

const appContainer = document.querySelector(".app");

new CardListComponent(
  appContainer,
  "characters-list row list-unstyled",
  characters
);

import { characters } from "./characters/characters.js";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent.js";

const app = document.querySelector(".app");

const button = new ButtonComponent(app, "speak", "character__action");

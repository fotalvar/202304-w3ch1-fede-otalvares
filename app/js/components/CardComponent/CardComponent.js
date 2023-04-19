import Component from "../Component/Component.js";
import Fighter from "../../characters/Fighter/Fighter.js";
import King from "../../characters/King/King.js";
import Squire from "../../characters/Squire/Squire.js";
import Advisor from "../../characters/Advisor/Advisor.js";

class CardComponent extends Component {
  character;
  className;

  constructor(parentElement, className, character) {
    super(parentElement, "li", className);

    this.element.className = className;
    this.character = character;
    this.render();
  }

  render() {
    this.element.innerHTML = `
        <div class="card character__card">
          <img src=${this.character.characterData.imageSource} alt=${
      this.character.characterData.name + this.character.characterData.family
    } class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${
              this.character.characterData.name
            } ${this.character.characterData.family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Age:${this.character.characterData.age} yrs</li>
                <li>
                  State:${
                    this.character.isAlive
                      ? `<i class="fas fa-thumbs-up"></i>`
                      : `<i class="fas fa-thumbs-down"></i>`
                  }
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Years of Reign: ${
                  this.character.yearsOfReign ? this.character.yearsOfReign : ""
                }</li>                
                <li>Weapon: ${
                  this.character.weapon ? this.character.weapon : "-"
                }</li>
                <li>Dexterity: ${
                  this.character.dexterity ? this.character.dexterity : "-"
                }</li>
                <li>Kiss Ass level: ${
                  this.character.kissAssLevel
                    ? this.character.kissAssLevel
                    : "-"
                }</li>
                <li>Advises to:   ${
                  this.character?.advises
                    ? `<li>${this.character.advises.characterData.name}</li>`
                    : "-"
                }</li>
                <li>Serves to: ${
                  this.character?.serves
                    ? `<li>${this.character.serves.characterData.name}</li>`
                    : "-"
                }</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">speak</button>
                <button class="character__action btn">die</button>
              </div>
            </div>
          </div>
          <i class="emoji">
          ${this.character instanceof Fighter ? "🗡" : ""}
          ${this.character instanceof King ? "👑" : ""}
          ${this.character instanceof Advisor ? "🎓" : ""}
          ${this.character instanceof Squire ? "🛡" : ""}
          </i>
        </div>`;
  }
}

export default CardComponent;

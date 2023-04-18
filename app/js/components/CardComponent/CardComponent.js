import Component from "../Component/Component.js";

class CardComponent extends Component {
  className;
  character;

  constructor(parentElement, className, character) {
    super(parentElement, "li");

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
                  State:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
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
                  this.character?.advises?.characterData?.name
                    ? `<li>${this.character.advises.characterData.name}</li>`
                    : "-"
                }</li>
                <li>Serves to: ${
                  this.character?.serves?.characterData?.name
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
          <i class="emoji"></i>
        </div>`;
  }
}

export default CardComponent;

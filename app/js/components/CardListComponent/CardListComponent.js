import CardComponent from "../CardComponent/CardComponent.js";
import Component from "../Component/Component.js";

class CardListComponent extends Component {
  className;
  characters;

  constructor(parentElement, className, characters) {
    super(parentElement, "ul");

    this.element.className = className;
    this.characters = characters;
    this.render();
  }

  render() {
    this.characters.forEach((character) => {
      new CardComponent(this.element, "character col", character);
    });
  }
}

export default CardListComponent;

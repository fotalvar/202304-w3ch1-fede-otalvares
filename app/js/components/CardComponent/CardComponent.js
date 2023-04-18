import Component from "../Component/Component.js";

class CardComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "div");

    this.render();
  }

  render() {
    this.element.innerHTML = `<div class="card"></div>`;
  }
}

export default CardComponent;

import Component from "../Component/Component.js";

class ButtonComponent extends Component {
  text;
  className;

  constructor(parentElement, text, className) {
    super(parentElement, "button");
    this.text = text;
    this.className = className;
    this.render();
  }

  render() {
    this.element.textContent = this.text;
    this.element.classList.add(this.className);
  }
}

export default ButtonComponent;

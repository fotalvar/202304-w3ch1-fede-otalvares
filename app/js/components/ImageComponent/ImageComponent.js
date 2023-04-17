import Component from "../Component/Component.js";

class ImageComponent extends Component {
  alternativeText;
  source;
  className;

  constructor(parentElement, alternativeText, source, className) {
    super(parentElement, "img");
    this.alternativeText = alternativeText;
    this.source = source;
    this.className = className;
    this.render();
  }

  render() {
    this.element.setAttribute("src", this.source);
    this.element.setAttribute("alt", this.alternativeText);
    this.element.classList.add(this.className);
  }
}

export default ImageComponent;

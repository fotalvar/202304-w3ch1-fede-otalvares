class Component {
  element;
  className;

  constructor(parentElement, tagName, className) {
    this.element = document.createElement(tagName);
    this.className = className;

    parentElement.appendChild(this.element);
  }
}

export default Component;

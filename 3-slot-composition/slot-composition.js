function createTemplate() {
  const template = document.createElement('template');
  template.innerHTML = `
  <style>
    :host {
      display: block;
      padding: 20px;
      border: 1px solid black;
    }
    p {
      font-size: 30px;
      font-weight: bold;
    }
    div.boxed {
      padding: 20px;
      border: 2px solid black;
    }
    ::slotted(p) {
      font-variant: small-caps
    }
  </style>

  <p>
    I'm in the shadow
  </p>
  <slot></slot>
  `;
  return template;
}

export default class CSSContainment extends HTMLElement {
  constructor() {
    super();
    const template = createTemplate();
    this._shadowRoot = this.attachShadow({ mode: 'open' });

    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

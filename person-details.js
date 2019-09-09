function createTemplate() {
  const template = document.createElement('template');
  template.innerHTML = `
  <style>
    :host {
      display: block;
    }
    p {
      font-size: 30px;
      font-weight: bold;
    }
  </style>
  <p>
    I'm in the shadow
  </p>
  `;

  return template;
}

export default class PersonDetails extends HTMLElement {
  constructor() {
    super();
    const template = createTemplate();
    this._shadowRoot = this.attachShadow({ mode: 'open' });

    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

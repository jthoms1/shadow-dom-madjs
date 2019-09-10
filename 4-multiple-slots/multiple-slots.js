function createTemplate() {
  const template = document.createElement('template');
  template.innerHTML = `
  <style>
    :host {
      display: block;
      padding: 20px;
      border: 1px solid black
    }
    p {
      font-size: 30px;
      font-weight: bold;
    }
    .start-block {
      border-bottom: 1px solid black;
    }
    .end-block {
      border-top: 1px solid black;
    }
  </style>

  <div class="start-block">
    <slot name="start"></slot>
  </div>
  <p>
    I'm in the shadow
  </p>
  <div class="end-block">
    <slot name="end"><p>End Slot</p></slot>
  </div>
  `;
  return template;
}

export default class MultipleSlots extends HTMLElement {
  constructor() {
    super();
    const template = createTemplate();
    this._shadowRoot = this.attachShadow({ mode: 'open' });

    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

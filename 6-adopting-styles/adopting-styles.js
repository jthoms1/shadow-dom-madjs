function createTemplate() {
  const template = document.createElement('template');
  template.innerHTML = `
  <style>
    :host {
      display: block;
      padding: 20px;
      border: 1px solid black
    }
    .start-block {
      border-bottom: 1px solid black;
    }
    .end-block {
      border-top: 1px solid black;
    }
  </style>

  <div class="start-block">
    <slot name="start"><p>Start Slot</p></slot>
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

function getStyleSheets(list) {
  return document.adoptedStyleSheets.filter(as => list.indexOf(as.rules[0].href) !== -1);
}

export default class AdoptingStyles extends HTMLElement {
  constructor() {
    super();
    const template = createTemplate();
  }
}

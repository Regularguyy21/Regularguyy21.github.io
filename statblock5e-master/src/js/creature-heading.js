import {createCustomElement} from '.statblock5e-master/helpers/create-custom-element.js';

fetch('./statblock5e-master/src/templates/creature-heading.html')
  .then(stream => stream.text())
  .then(htmlContent => {
    let contentNode =
      document.createRange().createContextualFragment(htmlContent);
    createCustomElement('creature-heading', contentNode);
  });

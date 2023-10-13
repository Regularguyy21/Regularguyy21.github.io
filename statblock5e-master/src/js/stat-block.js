import {createCustomElement} from './helpers/create-custom-element.js';

fetch('./statblock5e-master/src/templates/stat-block.html')
  .then(stream => stream.text())
  .then(htmlContent => {
    let contentNode =
      document.createRange().createContextualFragment(htmlContent);
    createCustomElement('stat-block', contentNode);
  });

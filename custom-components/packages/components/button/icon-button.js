import { __decorate } from '../../../node_modules/tslib/tslib.es6.js';
import CpButtonBase from './button-base.js';
import { style } from '../../utils/decorators.js';
import { createHtmlElement } from '../../utils/element.js';
import '../ripple/index.js';

var CpIconButton_1;
let CpIconButton = CpIconButton_1 = class CpIconButton extends CpButtonBase {
    constructor() {
        super();
        const { shadowRoot } = this;
        shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, CpIconButton_1.styleSheet];
        const button = shadowRoot.firstElementChild;
        const IconSlot = createHtmlElement('slot');
        button.classList.add('cp-icon-button');
        button.append(IconSlot);
    }
};
CpIconButton = CpIconButton_1 = __decorate([
    style({
        '.cp-icon-button': {
            padding: '8px',
            borderRadius: '50%',
            position: 'relative',
            outline: '0',
            border: 'none',
            userSelect: 'none',
            cursor: 'pointer',
        },
    })
], CpIconButton);
var CpIconButton$1 = CpIconButton;

export { CpIconButton$1 as default };

import { __decorate } from '../../../node_modules/tslib/tslib.es6.js';
import { style } from '../../utils/decorators.js';

var CpPaper_1;
let CpPaper = CpPaper_1 = class CpPaper extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.adoptedStyleSheets = [CpPaper_1.styleSheet];
        const slot = document.createElement('slot');
        shadowRoot.appendChild(slot);
    }
};
CpPaper = CpPaper_1 = __decorate([
    style({
        ':host([square=\'true\'])': {
            borderRadius: '0',
        },
        ':host([variant=\'outlined\'])': {
            boxShadow: 'none',
            border: '1px solid rgba(0,0,0,0.120)',
        },
        ':host': {
            display: 'block',
            backgroundColor: '#fff',
            borderRadius: '4px',
            boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
    })
], CpPaper);
var CpPaper$1 = CpPaper;

export { CpPaper$1 as default };

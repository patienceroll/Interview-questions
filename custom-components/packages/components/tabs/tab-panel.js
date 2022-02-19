import { __decorate } from '../../../node_modules/tslib/tslib.es6.js';
import { style } from '../../utils/decorators.js';

var CpTabPanel_1;
let CpTabPanel = CpTabPanel_1 = class CpTabPanel extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.adoptedStyleSheets = [CpTabPanel_1.styleSheet];
        const children = document.createElement('slot');
        shadowRoot.append(children);
    }
    /** 当前tabpanel的key */
    get key() {
        return this.getAttribute('key');
    }
};
CpTabPanel = CpTabPanel_1 = __decorate([
    style({
        ':host([active=\'true\'])': {
            display: 'block',
        },
        ':host': {
            display: 'none',
            fontSize: '16px',
            padding: '1.5em',
        },
    })
], CpTabPanel);
var CpTabPanel$1 = CpTabPanel;

export { CpTabPanel$1 as default };

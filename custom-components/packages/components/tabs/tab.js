import { __decorate } from '../../../node_modules/tslib/tslib.es6.js';
import { style } from '../../utils/decorators.js';
import { defineCustomComponents, createHtmlElement } from '../../utils/element.js';
import { dispatchCustomEvent } from '../../utils/event.js';
import CpButton from '../button/button.js';

var CpTab_1;
defineCustomComponents('cp-button', CpButton);
let CpTab = CpTab_1 = class CpTab extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.adoptedStyleSheets = [CpTab_1.styleSheet];
        const children = createHtmlElement('cp-button');
        children.setAttribute('ripple-color', 'currentColor');
        this.addEventListener('click', (event) => {
            dispatchCustomEvent(this, 'cp-tab-click', { nativeEvent: event, key: this.key }, { bubbles: true });
        });
        children.append(createHtmlElement('slot'));
        shadowRoot.append(children);
    }
    /** 当前tab的key */
    get key() {
        return this.getAttribute('key');
    }
    /** 激活当前tab */
    active() {
        this.setAttribute('active', 'true');
    }
    /** 取消激活当前tab */
    cancelAtive() {
        this.setAttribute('active', 'false');
    }
};
CpTab = CpTab_1 = __decorate([
    style({
        ':host([active=\'true\']) cp-button::part(button)': {
            color: '#007FFF',
        },
        'cp-button::part(button)': {
            boxShadow: 'none',
            backgroundColor: 'transparent',
            padding: '0.75em 1em',
        },
        'cp-button': {
            borderRadius: '0',
        },
        ':host': {
            display: 'block',
            fontSize: '16px',
        },
    })
], CpTab);
var CpTab$1 = CpTab;

export { CpTab$1 as default };

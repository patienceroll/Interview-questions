import { __decorate } from '../../../node_modules/tslib/tslib.es6.js';
import { style } from '../../utils/decorators.js';

var CpAvatar_1;
let CpAvatar = CpAvatar_1 = class CpAvatar extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.adoptedStyleSheets = [CpAvatar_1.styleSheet];
        this.childrenSlot = document.createElement('slot');
        this.childrenSlot.classList.add('cp-avatar-children-slot');
        shadowRoot.appendChild(this.childrenSlot);
    }
};
CpAvatar = CpAvatar_1 = __decorate([
    style({
        '.cp-avatar-children-slot': {
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        ':host': {
            width: '2.5em',
            height: '2.5em',
            lineHeight: '2.5em',
            display: 'inline-block',
            fontSize: '16px',
            verticalAlign: 'top',
            borderRadius: '50%',
            color: '#fff',
            textAlign: 'center',
            backgroundColor: '#bdbdbd',
            overflow: 'hidden',
            fontWeight: 'bold',
        },
    })
], CpAvatar);
var CpAvatar$1 = CpAvatar;

export { CpAvatar$1 as default };

import { __decorate } from '../../../node_modules/tslib/tslib.es6.js';
import { style } from '../../utils/decorators.js';
import setAttributes from '../../utils/set-attributes.js';
import { defineCustomComponents, createHtmlElement } from '../../utils/element.js';
import Ripple from '../ripple/ripple.js';

var CpButtonBase_1;
defineCustomComponents('cp-ripple', Ripple);
let CpButtonBase = CpButtonBase_1 = class CpButtonBase extends HTMLElement {
    constructor() {
        super();
        /** 当前所有涟漪的集合 */
        this.ripples = new Set();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.adoptedStyleSheets = [CpButtonBase_1.styleSheet];
        this.button = createHtmlElement('button');
        this.cpRipple = createHtmlElement('cp-ripple');
        this.button.classList.add('cp-button');
        setAttributes(this.button, { part: 'button' });
        this.addEventListener('mousedown', (e) => {
            this.ripples.add(this.cpRipple.spread({ top: e.offsetY, left: e.offsetX }));
        });
        this.addEventListener('mouseup', this.stableRipples);
        /** 如果点击之后,鼠标拖到其他元素去,则不会触发mouseup,此时也清除ripple */
        this.addEventListener('mouseleave', this.stableRipples);
        this.addEventListener('touchstart', (e) => {
            if (e.targetTouches.length !== 1)
                return;
            if (e.cancelable) {
                const { targetTouches, target } = e;
                if (target) {
                    const [touch] = targetTouches;
                    const { pageX, pageY } = touch;
                    const { left, top } = target.getBoundingClientRect();
                    this.ripples.add(this.cpRipple.spread({
                        top: pageY - top,
                        left: pageX - left,
                    }));
                }
            }
        }, { passive: true });
        this.addEventListener('touchend', this.stableRipples);
        this.button.appendChild(this.cpRipple);
        shadowRoot.appendChild(this.button);
    }
    /** 清除掉当前button产生的涟漪 */
    stableRipples() {
        this.ripples.forEach((ripple) => {
            ripple.stable();
        });
        this.ripples.clear();
    }
    /** 涟漪的颜色 */
    get rippleColor() {
        return this.getAttribute('ripple-color') || undefined;
    }
};
CpButtonBase = CpButtonBase_1 = __decorate([
    style({
        '.cp-button:hover': {
            backgroundColor: '#c0c0c0',
            boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%)',
        },
        '.cp-button': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.375em 0.75em',
            border: 'none',
            position: 'relative',
            outline: '0',
            userSelect: 'none',
            cursor: 'pointer',
            width: '100%',
            height: '100%',
            backgroundColor: '#e0e0e0',
            borderRadius: 'inherit',
            boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%)',
            transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        ':host([disable=\'true\'])': {
            pointerEvents: 'none',
        },
        ':host': {
            borderRadius: '0.25em',
            display: 'inline-block',
            fontSize: '16px',
        },
    })
], CpButtonBase);
var CpButtonBase$1 = CpButtonBase;

export { CpButtonBase$1 as default };

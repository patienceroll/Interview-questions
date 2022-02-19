import { __decorate } from '../../../node_modules/tslib/tslib.es6.js';
import Ripple from '../ripple/ripple.js';
import { style, watch } from '../../utils/decorators.js';
import setAttributes from '../../utils/set-attributes.js';
import { defineCustomComponents, createHtmlElement, createSvgElement } from '../../utils/element.js';
import { dispatchCustomEvent } from '../../utils/event.js';

var CpRadio_1;
defineCustomComponents('cp-ripple', Ripple);
let CpRadio = CpRadio_1 = class CpRadio extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.adoptedStyleSheets = [CpRadio_1.styleSheet];
        const label = createHtmlElement('label');
        const radioWrap = createHtmlElement('span');
        this.radio = createHtmlElement('input');
        const ripple = createHtmlElement('cp-ripple');
        const textSlot = createHtmlElement('slot');
        this.cpRadioIcon = createSvgElement('svg');
        this.cpRadioOuterCircle = createSvgElement('circle');
        this.cpRadioInnerCircle = createSvgElement('circle');
        setAttributes(this.cpRadioIcon, { class: 'cp-radio-icon', viewBox: '0 0 100 100' });
        setAttributes(this.cpRadioOuterCircle, { class: 'outer', cx: '50', cy: '50', r: '42' });
        setAttributes(this.cpRadioInnerCircle, { class: 'inner', cx: '50', cy: '50', r: '28' });
        setAttributes(label, { class: 'cp-radio-label' });
        setAttributes(radioWrap, { class: 'cp-radio-radio-wrap' });
        this.radio.type = 'radio';
        this.addEventListener('click', () => {
            if (this.getAttribute('checked') !== 'true') {
                this.setAttribute('checked', 'true');
            }
        });
        radioWrap.addEventListener('click', () => {
            const { stable } = ripple.spread({
                top: radioWrap.clientHeight / 2,
                left: radioWrap.clientWidth / 2,
            });
            stable();
        });
        this.cpRadioIcon.append(this.cpRadioInnerCircle, this.cpRadioOuterCircle);
        radioWrap.append(this.radio, ripple, this.cpRadioIcon);
        label.append(radioWrap, textSlot);
        shadowRoot.append(label);
    }
    connectedCallback() {
        if (this.getAttribute('default-checked') === 'true') {
            this.setAttribute('checked', 'true');
        }
    }
};
CpRadio = CpRadio_1 = __decorate([
    style({
        '.inner-checked': {
            fill: '#1976d2',
            transform: 'scale(1)',
        },
        '.outer-checked': {
            stroke: '#1976d2',
        },
        '.inner': {
            fill: '#999',
            transform: 'scale(0)',
            transition: 'transform 300ms ease',
            transformOrigin: 'center',
        },
        '.outer': {
            stroke: '#999',
            fill: 'none',
            strokeWidth: '8',
        },
        '.cp-radio-icon': {
            width: '100%',
            height: '100%',
        },
        '.cp-radio-radio-wrap > input': {
            opacity: '0',
            position: 'absolute',
            zIndex: '1',
            width: '100%',
            height: '100%',
            margin: '0',
            top: '0',
            left: '0',
            cursor: 'pointer',
        },
        '.cp-radio-radio-wrap:hover': {
            backgroundColor: '#e9e9e9',
        },
        '.cp-radio-radio-wrap': {
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            padding: '0.4em',
            width: '1.2em',
            height: '1.2em',
            verticalAlign: 'middle',
            borderRadius: '50%',
        },
        '.cp-radio-label > slot': {
            display: 'inline-block',
            verticalAlign: 'middle',
        },
        '.cp-radio-label': {
            display: 'inline-block',
            cursor: 'pointer',
        },
        ':host([disabled=\'true\'])': {
            pointerEvents: 'none',
        },
        ':host': {
            display: 'inline-block',
        },
    }),
    watch({
        checked(newer, older) {
            if (newer === 'true') {
                this.radio.checked = true;
                this.cpRadioOuterCircle.classList.add('outer-checked');
                this.cpRadioInnerCircle.classList.add('inner-checked');
                if (older !== 'true') {
                    dispatchCustomEvent(this, 'check', { checked: true }, { bubbles: true });
                }
            }
            else {
                this.radio.checked = false;
                this.cpRadioOuterCircle.classList.remove('outer-checked');
                this.cpRadioInnerCircle.classList.remove('inner-checked');
            }
        },
        name(newer) {
            if (newer)
                this.radio.name = newer;
            else
                this.radio.removeAttribute('name');
        },
    })
], CpRadio);
var CpRadio$1 = CpRadio;

export { CpRadio$1 as default };

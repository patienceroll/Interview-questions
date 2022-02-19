import { __decorate } from '../../../node_modules/tslib/tslib.es6.js';
import { style, watch } from '../../utils/decorators.js';
import { defineCustomComponents, createHtmlElement, createSvgElement } from '../../utils/element.js';
import CpPopover from '../popover/popover.js';

var CpTooltip_1;
defineCustomComponents('cp-popover', CpPopover);
const Path = '<path fill=\'currentColor\' d=\'M512 69.479l442.498 442.498-442.498 442.498-442.498-442.498 442.498-442.498z\'></path>';
let CpTooltip = CpTooltip_1 = class CpTooltip extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.adoptedStyleSheets = [CpTooltip_1.styleSheet];
        this.CpPopover = createHtmlElement('cp-popover');
        const children = createHtmlElement('slot');
        this.cpContextWrapper = createHtmlElement('mark');
        const context = createHtmlElement('slot');
        this.cpTooltipArrow = createSvgElement('svg');
        this.cpTooltipArrow.setAttribute('viewBox', '0 0 1024 1024');
        this.cpTooltipArrow.classList.add('cp-tooltip-arrow');
        this.cpTooltipArrow.innerHTML = Path;
        this.cpContextWrapper.slot = 'popover-context';
        this.cpContextWrapper.classList.add('cp-tooltip-context-wrapper');
        context.name = 'tooltip-context';
        this.cpContextWrapper.append(this.cpTooltipArrow, context);
        this.CpPopover.append(children, this.cpContextWrapper);
        shadowRoot.append(this.CpPopover);
    }
    /** 是否展示tooltip */
    get open() {
        return this.CpPopover.getAttribute('open') === 'true';
    }
    /**  是否展示tooltip */
    set open(open) {
        if (open)
            this.CpPopover.setAttribute('open', 'true');
        else
            this.CpPopover.setAttribute('open', 'false');
    }
    /** 根据 placement 获取 tooltip箭头位置 */
    getTooltipArrowPosition(placement) {
        const positon = { top: 'unset', left: 'unset' };
        switch (placement) {
            case 'top':
                positon.top = 'calc(100% - 0.5em)';
                positon.left = 'calc(50% - 0.5em)';
                break;
            case 'top-start':
                positon.top = 'calc(100% - 0.5em)';
                positon.left = '0.25em';
                break;
            case 'top-end':
                positon.top = 'calc(100% - 0.5em)';
                positon.left = 'calc(100% - 1.25em)';
                break;
            case 'left':
                positon.top = 'calc(50% - 0.5em)';
                positon.left = 'calc(100% - 0.5em)';
                break;
            case 'left-start':
                positon.top = '0.25em';
                positon.left = 'calc(100% - 0.5em)';
                break;
            case 'left-end':
                positon.top = 'calc(100% - 1.25em)';
                positon.left = 'calc(100% - 0.5em)';
                break;
            case 'right':
                positon.top = 'calc(50% - 0.5em)';
                positon.left = '-0.5em';
                break;
            case 'right-start':
                positon.top = '0.25em';
                positon.left = '-0.5em';
                break;
            case 'right-end':
                positon.top = 'calc(100% - 1.25em)';
                positon.left = '-0.5em';
                break;
            case 'bottom':
                positon.top = '-0.5em';
                positon.left = 'calc(50% - 0.5em)';
                break;
            case 'bottom-start':
                positon.top = '-0.5em';
                positon.left = '0.25em';
                break;
            case 'bottom-end':
                positon.top = '-0.5em';
                positon.left = 'calc(100% - 1.25em)';
                break;
            // 默认是top
            default:
                positon.top = 'calc(100% - 0.5em)';
                positon.left = 'calc(50% - 0.5em)';
        }
        return positon;
    }
    /** 根据 placement 设置箭头位置   */
    setTootipArrowPositon(placement) {
        const { top, left } = this.getTooltipArrowPosition(placement);
        this.cpTooltipArrow.style.left = left;
        this.cpTooltipArrow.style.top = top;
    }
    connectedCallback() {
        if (!this.getAttribute('placement'))
            this.setTootipArrowPositon('top');
    }
};
CpTooltip = CpTooltip_1 = __decorate([
    style({
        '.cp-tooltip-arrow': {
            color: '#6d6d6d',
            width: '1em',
            height: '1em',
            position: 'absolute',
            fontSize: '16px',
            display: 'none',
        },
        '.cp-tooltip-context-wrapper': {
            backgroundColor: '#6d6d6d',
            display: 'block',
            color: '#fff',
            padding: '0.25em 0.5em',
            fontSize: '0.875em',
            whiteSpace: 'nowrap',
            borderRadius: '0.25em',
            position: 'relative',
        },
        ':host': {
            display: 'inline-block',
            position: 'relative',
            fontSize: '16px',
        },
    }),
    watch({
        placement(newer) {
            if (newer) {
                this.CpPopover.setAttribute('placement', newer);
                this.setTootipArrowPositon(newer);
            }
            else {
                this.CpPopover.setAttribute('placement', 'top');
                this.setTootipArrowPositon('top');
            }
        },
        'disable-hover'(newer) {
            if (newer === 'true')
                this.CpPopover.setAttribute('disable-hover', newer);
            else
                this.CpPopover.setAttribute('disable-hover', 'false');
        },
        'disable-click'(newer) {
            if (newer === 'true')
                this.CpPopover.setAttribute('disable-click', newer);
            else
                this.CpPopover.setAttribute('disable-click', 'false');
        },
        'disable-focus'(newer) {
            if (newer === 'true')
                this.CpPopover.setAttribute('disable-focus', newer);
            else
                this.CpPopover.setAttribute('disable-focus', 'false');
        },
        transition(newer) {
            if (newer)
                this.CpPopover.setAttribute('transition', newer);
            else
                this.CpPopover.setAttribute('transition', 'grow');
        },
        'no-style'(newer) {
            if (newer === 'true')
                this.cpContextWrapper.classList.remove('cp-tooltip-context-wrapper');
            else
                this.cpContextWrapper.classList.add('cp-tooltip-context-wrapper');
        },
        arrow(newer) {
            if (newer === 'true')
                this.cpTooltipArrow.style.display = 'block';
            else
                this.cpTooltipArrow.style.display = 'none';
        },
        open(newer) {
            if (newer === 'true')
                this.open = true;
            else if (newer)
                this.open = false;
            else
                this.CpPopover.removeAttribute('open');
        },
    })
], CpTooltip);
var CpTooltip$1 = CpTooltip;

export { CpTooltip$1 as default };

import { __decorate } from '../../../node_modules/tslib/tslib.es6.js';
import { style, watch } from '../../utils/decorators.js';
import { createHtmlElement } from '../../utils/element.js';
import { addCustomEventListener, dispatchCustomEvent } from '../../utils/event.js';

var CpAccordion_1;
let CpAccordion = CpAccordion_1 = class CpAccordion extends HTMLElement {
    constructor() {
        super();
        this.realActiveKeys = this.accordionItems
            .map((i) => {
            const key = i.getAttribute('key');
            if (i.getAttribute('open') === 'true' && key)
                return key;
            return '';
        })
            .filter((key) => key);
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.adoptedStyleSheets = [CpAccordion_1.styleSheet];
        const slot = createHtmlElement('slot');
        /** 监听单个折叠面板折叠 */
        addCustomEventListener(this, 'cp-accordion-item-fold', (event) => {
            const key = event.detail.accordionItem.getAttribute('key');
            if (key) {
                const newActiveKeys = this.realActiveKeys.filter((k) => k !== key);
                /** 如果受控,单个折叠面板会变化,此时本组件要渲染它之前的状态,维持它不变化 */
                if (this.activeKeys)
                    this.renderItem(this.realActiveKeys);
                // 如果不受控,渲染最近的展开列表
                else {
                    this.renderItem(newActiveKeys);
                    this.realActiveKeys = newActiveKeys;
                }
                dispatchCustomEvent(this, 'change', {
                    'active-keys': newActiveKeys,
                    current: key,
                });
            }
        });
        /** 监听单个折叠面板展开 */
        addCustomEventListener(this, 'cp-accordion-item-expand', (event) => {
            const key = event.detail.accordionItem.getAttribute('key');
            if (key) {
                const newActiveKeys = this.realActiveKeys.concat(key);
                /** 如果受控,单个折叠面板会变化,此时本组件要渲染它之前的状态,维持它不变化 */
                if (this.activeKeys)
                    this.renderItem(this.realActiveKeys);
                // 如果不受控,渲染最近的展开列表
                else {
                    this.renderItem(newActiveKeys);
                    this.realActiveKeys = newActiveKeys;
                }
                dispatchCustomEvent(this, 'change', {
                    'active-keys': newActiveKeys,
                    current: key,
                });
            }
        });
        shadowRoot.appendChild(slot);
    }
    /** 所有手风琴面板item  */
    get accordionItems() {
        return Array.from(this.querySelectorAll('cp-accordion-item'));
    }
    /** 所有激活的keys */
    get activeKeys() {
        return this.getAttribute('active-keys');
    }
    /** 渲染单个折叠面板是否展开 */
    renderItem(keys) {
        this.accordionItems.forEach((item) => {
            const key = item.getAttribute('key');
            if (key) {
                if (keys.includes(key)) {
                    item.setAttribute('open', 'true');
                }
                else {
                    item.setAttribute('open', 'false');
                }
            }
        });
    }
    connectedCallback() {
        this.accordionItems.forEach((item, index) => {
            if (index === 0) {
                item.setAttribute('first-item', 'true');
            }
            if (index === this.accordionItems.length - 1) {
                item.setAttribute('last-item', 'true');
            }
        });
    }
};
CpAccordion = CpAccordion_1 = __decorate([
    style({
        ':host': {
            display: 'block',
            fontSize: '16px',
        },
    }),
    watch({
        'active-keys'(newer) {
            if (newer) {
                try {
                    const activeKeys = JSON.parse(newer);
                    if (Array.isArray(activeKeys)) {
                        this.realActiveKeys = activeKeys;
                        this.renderItem(activeKeys);
                    }
                    else
                        throw new Error();
                }
                catch (err) {
                    throw new Error('active-keys 的值类型应该为数组形式的JSON字符串');
                }
            }
        },
    })
], CpAccordion);
var CpAccordion$1 = CpAccordion;

export { CpAccordion$1 as default };

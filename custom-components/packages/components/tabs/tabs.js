import { __decorate } from '../../../node_modules/tslib/tslib.es6.js';
import { style, watch } from '../../utils/decorators.js';
import { addCustomEventListener, dispatchCustomEvent } from '../../utils/event.js';

var CpTabs_1;
let CpTabs = CpTabs_1 = class CpTabs extends HTMLElement {
    constructor() {
        super();
        this.realActiveKey = '';
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.adoptedStyleSheets = [CpTabs_1.styleSheet];
        this.wrapper = document.createElement('div');
        this.wrapperBar = document.createElement('div');
        const children = document.createElement('slot');
        this.wrapper.classList.add('cp-tabs-wrapper');
        this.wrapperBar.classList.add('cp-tabs-weapper-bar');
        children.classList.add('cp-tabs-children');
        addCustomEventListener(this, 'cp-tab-click', (event) => {
            const { detail } = event;
            if (detail.key) {
                /** 如果是非受控的,更新内部维护的值,触发组件内部更新 */
                if (!this.getAttribute('active-key'))
                    this.setRealActiveKey(detail.key);
                dispatchCustomEvent(this, 'change', { activeKey: detail.key, nativeEvent: event }, { bubbles: true });
            }
        });
        this.wrapper.append(children, this.wrapperBar);
        shadowRoot.append(this.wrapper);
    }
    /** 当前tabs控制的tab节点 */
    get tabNodes() {
        return Array.from(this.children).filter((node) => node.localName === 'cp-tab');
    }
    /** 激活某一个tab,其余tab应该被取消激活 */
    activeTab(activeKey) {
        this.tabNodes.forEach((tab) => {
            if (tab.key === activeKey) {
                tab.active();
            }
            else
                tab.cancelAtive();
        });
    }
    /** 渲染tab-bar */
    renderBar(activeKey) {
        const tab = this.tabNodes.find((t) => t.key === activeKey);
        if (tab) {
            // tab 的父级是slot,但是偏移的父级是 slot 的父级,这里为什么还没确定
            this.wrapperBar.style.left = `${tab.offsetLeft}px`;
            this.wrapperBar.style.width = `${tab.clientWidth}px`;
        }
    }
    /** 设置保存在组件内部的 activeKey */
    setRealActiveKey(activeKey) {
        this.realActiveKey = activeKey;
        this.activeTab(activeKey);
        this.renderBar(activeKey);
    }
};
CpTabs = CpTabs_1 = __decorate([
    style({
        '.cp-tabs-children': {
            display: 'flex',
        },
        '.cp-tabs-weapper-bar': {
            position: 'absolute',
            width: '0',
            bottom: '0',
            left: '0',
            height: '2px',
            backgroundColor: '#007FFF',
            transition: 'left ease 500ms,width ease 300ms',
        },
        '.cp-tabs-wrapper': {
            display: 'flex',
            position: 'relative',
        },
        ':host': {
            display: 'block',
            wordSpacing: '0',
            borderBottom: '1px solid rgba(0,0,0,0.12)',
        },
    }),
    watch({
        center(newer) {
            if (newer === 'true')
                this.wrapper.style.justifyContent = 'center';
            else
                this.wrapper.style.removeProperty('justifyContent');
        },
        'active-key'(newer) {
            if (newer)
                this.setRealActiveKey(newer);
        },
    })
], CpTabs);
var CpTabs$1 = CpTabs;

export { CpTabs$1 as default };

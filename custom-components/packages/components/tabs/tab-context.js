import { __decorate } from '../../../node_modules/tslib/tslib.es6.js';
import { style, watch } from '../../utils/decorators.js';
import { addCustomEventListener } from '../../utils/event.js';

let CpTabContext = class CpTabContext extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const tabNodes = this.tabNodes;
        if (tabNodes && tabNodes.length !== 0)
            this.realActivekey = tabNodes[0].key || '';
        else
            this.realActivekey = '';
        addCustomEventListener(this, 'change', (event) => {
            const { detail } = event;
            /** 如果是非受控的,更新内部维护的值,触发组件内部更新 */
            if (!this.getAttribute('active-key'))
                this.setRealActiveKey(detail.activeKey);
        });
        const children = document.createElement('slot');
        shadowRoot.appendChild(children);
    }
    /**  TabContext 组件子元素 tabs */
    get tabsNode() {
        return Array.from(this.children).find((item) => item.localName === 'cp-tabs');
    }
    /** TabContext 组件子元素 tab */
    get tabNodes() {
        var _a;
        return (_a = this.tabsNode) === null || _a === void 0 ? void 0 : _a.tabNodes;
    }
    /** TabContext 组件子元素 tabPanel */
    get tabPanelNodes() {
        return Array.from(this.children).filter((item) => item.localName === 'cp-tab-panel');
    }
    /** 设置当前 tabContext 激活的key */
    setRealActiveKey(activeKey) {
        this.realActivekey = activeKey;
        this.tabPanelNodes.forEach((panel) => {
            if (panel.key === activeKey)
                panel.setAttribute('active', 'true');
            else
                panel.setAttribute('active', 'false');
        });
        if (this.tabsNode)
            this.tabsNode.setAttribute('active-key', activeKey);
    }
    connectedCallback() {
        /** 挂载的时候,如果是非受控的,第一个tab为默认选中的key */
        const tabNodes = this.tabNodes;
        if (!this.getAttribute('active-key') && tabNodes && tabNodes[0]) {
            this.setRealActiveKey(tabNodes[0].key || '');
        }
    }
};
CpTabContext = __decorate([
    style({
        ':host': {
            display: 'block',
        },
    }),
    watch({
        'active-key'(newer) {
            if (newer)
                this.setRealActiveKey(newer);
        },
    })
], CpTabContext);
var CpTabContext$1 = CpTabContext;

export { CpTabContext$1 as default };

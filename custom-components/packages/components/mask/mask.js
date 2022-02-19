import { __decorate, __classPrivateFieldGet, __classPrivateFieldSet } from '../../../node_modules/tslib/tslib.es6.js';
import { style, keyframe, watch } from '../../utils/decorators.js';
import Stack from '../../utils/stack.js';
import { dispatchCustomEvent } from '../../utils/event.js';

var _CpMask_instances, _CpMask_maskNode, _CpMask_disposeMaskAnimation, _CpMask_onKeydown, _CpMask_disposeOpen;
var CpMask_1;
const stack = new Stack();
stack.finished = function (removeItem) {
    var _a, _b;
    const len = this.getLength();
    // 新增弹窗才会走这个for循环
    if (!removeItem) {
        for (let i = 0; i < len; i++) {
            this.stack[i]._disposeEvent(true);
        }
    }
    (_a = removeItem === null || removeItem === void 0 ? void 0 : removeItem._disposeEvent) === null || _a === void 0 ? void 0 : _a.call(removeItem, true);
    (_b = this.top) === null || _b === void 0 ? void 0 : _b._disposeEvent();
    if (this.top)
        this.top.zIndex = len;
};
let CpMask = CpMask_1 = class CpMask extends HTMLElement {
    constructor(showMask = true) {
        super();
        _CpMask_instances.add(this);
        /** 层级 */
        this.zIndex = 0;
        _CpMask_maskNode.set(this, void 0);
        _CpMask_disposeMaskAnimation.set(this, (e) => {
            switch (e.animationName) {
                case 'close':
                    // 动画结束
                    if ([...__classPrivateFieldGet(this, _CpMask_maskNode, "f").classList].includes('cp-mask-close')) {
                        this.setAttribute('open', 'false');
                        stack.remove(this);
                    }
                    break;
            }
        });
        _CpMask_onKeydown.set(this, (e) => {
            if (e.keyCode === 27) {
                dispatchCustomEvent(this, 'close', undefined, { bubbles: false });
            }
        });
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const closable = this.getAttribute('mask-closable');
        const mask = document.createElement('div');
        const maskContent = document.createElement('div');
        maskContent.classList.add('cp-mask-content');
        mask.classList.add(showMask ? 'cp-mask' : 'no-mask');
        this.maskContent = maskContent;
        __classPrivateFieldSet(this, _CpMask_maskNode, mask, "f");
        this.disposeMaskClosable(closable);
        // 动画结束
        __classPrivateFieldGet(this, _CpMask_maskNode, "f").addEventListener('animationend', __classPrivateFieldGet(this, _CpMask_disposeMaskAnimation, "f"));
        shadowRoot.adoptedStyleSheets = [CpMask_1.styleSheet, CpMask_1.keyframesSheet];
        shadowRoot.append(mask, maskContent);
    }
    disconnectedCallback() {
        __classPrivateFieldGet(this, _CpMask_maskNode, "f").removeEventListener('animationend', __classPrivateFieldGet(this, _CpMask_disposeMaskAnimation, "f"));
        __classPrivateFieldGet(this, _CpMask_maskNode, "f").removeEventListener('click', this.close.bind(this), false);
    }
    _disposeEvent(remove = false) {
        if (!remove) {
            this.addEventListener('close', this.close.bind(this), false);
            document.addEventListener('keydown', __classPrivateFieldGet(this, _CpMask_onKeydown, "f"), false);
        }
        else {
            this.removeEventListener('close', this.close.bind(this), false);
            document.removeEventListener('keydown', __classPrivateFieldGet(this, _CpMask_onKeydown, "f"), false);
        }
    }
    disposeMaskClosable(closable) {
        if (closable === 'false') {
            __classPrivateFieldGet(this, _CpMask_maskNode, "f").removeEventListener('click', this.close.bind(this), false);
        }
        else {
            __classPrivateFieldGet(this, _CpMask_maskNode, "f").addEventListener('click', this.close.bind(this), false);
        }
    }
    /** 关闭mask回调 */
    onMaskClose() {
        // TODO
    }
    /** 开启mask回调 */
    onMaskShow() {
        // TODO
    }
    /** 打开蒙层 */
    show() {
        var _a;
        const isOpen = this.getAttribute('open');
        if (isOpen === 'true')
            return;
        stack.push(this);
        this.setAttribute('open', 'true');
        __classPrivateFieldGet(this, _CpMask_instances, "m", _CpMask_disposeOpen).call(this, 'true');
        (_a = this.onMaskShow) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    /** 关闭蒙层 */
    close() {
        var _a;
        __classPrivateFieldGet(this, _CpMask_instances, "m", _CpMask_disposeOpen).call(this, 'false');
        (_a = this.onMaskClose) === null || _a === void 0 ? void 0 : _a.call(this);
    }
};
_CpMask_maskNode = new WeakMap(), _CpMask_disposeMaskAnimation = new WeakMap(), _CpMask_onKeydown = new WeakMap(), _CpMask_instances = new WeakSet(), _CpMask_disposeOpen = function _CpMask_disposeOpen(isOpen = 'true') {
    var _a;
    if (isOpen === 'true') {
        __classPrivateFieldGet(this, _CpMask_maskNode, "f").classList.add('cp-mask-show');
        __classPrivateFieldGet(this, _CpMask_maskNode, "f").classList.remove('cp-mask-close');
        __classPrivateFieldGet(this, _CpMask_maskNode, "f").style.zIndex = `${1000 + this.zIndex}`;
        this.maskContent.style.zIndex = `${1000 + this.zIndex}`;
    }
    else {
        (_a = __classPrivateFieldGet(this, _CpMask_maskNode, "f")) === null || _a === void 0 ? void 0 : _a.classList.replace('cp-mask-show', 'cp-mask-close');
    }
};
CpMask = CpMask_1 = __decorate([
    style({
        ':host([open=true])': {
            display: 'block',
        },
        ':host': {
            display: 'none',
        },
        '.cp-mask': {
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,.45)',
            top: '0',
            left: '0',
            overflow: 'hidden',
        },
        '.cp-mask-content': {
            position: 'fixed',
            boxSizing: 'border-box',
        },
        '.cp-mask-show': {
            opacity: '1',
            animation: 'show 0.3s ease',
        },
        '.cp-mask-close': {
            opacity: '0',
            animation: 'close 0.3s ease',
        },
    }),
    keyframe({
        show: {
            '0%': {
                opacity: '0',
            },
            '100%': {
                opacity: '1',
            },
        },
        close: {
            '0%': {
                opacity: '1',
            },
            '100%': {
                opacity: '0',
            },
        },
    }),
    watch({
        ['mask-closable'](_, newValue) {
            this.disposeMaskClosable(newValue);
        },
    })
], CpMask);
var CpMask$1 = CpMask;

export { CpMask$1 as default };

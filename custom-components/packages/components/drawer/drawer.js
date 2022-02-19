import { __decorate, __classPrivateFieldGet, __classPrivateFieldSet } from '../../../node_modules/tslib/tslib.es6.js';
import { style, keyframe } from '../../utils/decorators.js';
import CpMask from '../mask/mask.js';

var _CpDrawer_instances, _CpDrawer_direction, _CpDrawer_closeIcon, _CpDrawer_renderHeader, _CpDrawer_renderContent, _CpDrawer_disposeDirection, _CpDrawer_disposeDrawerClass;
var CpDrawer_1;
const icon = '<svg  t=\'1632705635683\' class=\'close-icon\' viewBox=\'0 0 1024 1024\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' p-id=\'2363\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' width=\'100%\' height=\'100%\'><defs><style type=\'text/css\'></style></defs><path width=\'100%\' height=\'100%\' d=\'M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z\' fill=\'#444444\' p-id=\'2364\'></path></svg>';
let CpDrawer = CpDrawer_1 = class CpDrawer extends CpMask {
    constructor() {
        super();
        _CpDrawer_instances.add(this);
        /** 弹出位置 */
        _CpDrawer_direction.set(this, void 0);
        _CpDrawer_closeIcon.set(this, void 0);
        this.maskContent.classList.add('cp-drawer-container');
        __classPrivateFieldGet(this, _CpDrawer_instances, "m", _CpDrawer_disposeDirection).call(this);
        __classPrivateFieldGet(this, _CpDrawer_instances, "m", _CpDrawer_disposeDrawerClass).call(this);
        this.maskContent.append(__classPrivateFieldGet(this, _CpDrawer_instances, "m", _CpDrawer_renderHeader).call(this), __classPrivateFieldGet(this, _CpDrawer_instances, "m", _CpDrawer_renderContent).call(this));
        if (this.shadowRoot) {
            this.shadowRoot.adoptedStyleSheets = [
                ...this.shadowRoot.adoptedStyleSheets,
                CpDrawer_1.styleSheet,
                CpDrawer_1.keyframesSheet,
            ];
        }
    }
    disconnectedCallback() {
        var _a;
        (_a = __classPrivateFieldGet(this, _CpDrawer_closeIcon, "f")) === null || _a === void 0 ? void 0 : _a.removeEventListener('click', this.close.bind(this), false);
    }
    onMaskShow() {
        __classPrivateFieldGet(this, _CpDrawer_instances, "m", _CpDrawer_disposeDrawerClass).call(this, true);
    }
    onMaskClose() {
        __classPrivateFieldGet(this, _CpDrawer_instances, "m", _CpDrawer_disposeDrawerClass).call(this, false);
    }
};
_CpDrawer_direction = new WeakMap(), _CpDrawer_closeIcon = new WeakMap(), _CpDrawer_instances = new WeakSet(), _CpDrawer_renderHeader = function _CpDrawer_renderHeader() {
    const title = this.getAttribute('title');
    const header = document.createElement('header');
    header.classList.add('cp-drawer-header');
    const headerTitleContent = document.createElement('div');
    headerTitleContent.classList.add('cp-drawer-header-title-content');
    const headerTitle = document.createElement('div');
    headerTitle.classList.add('cp-drawer-header-title');
    const headerTitleSlot = document.createElement('slot');
    headerTitleSlot.name = 'drawer-header-title';
    headerTitle.innerHTML = title ? `<span>${title}</span>` : '';
    headerTitle.append(headerTitleSlot);
    const closeIcon = document.createElement('div');
    closeIcon.innerHTML = icon;
    closeIcon.classList.add('cp-drawer-header-close-icon');
    closeIcon.addEventListener('click', this.close.bind(this), false);
    headerTitleContent.append(closeIcon, headerTitle);
    __classPrivateFieldSet(this, _CpDrawer_closeIcon, closeIcon, "f");
    const headerAction = document.createElement('div');
    headerAction.classList.add('cp-drawer-header-action');
    const headerActionSlot = document.createElement('slot');
    headerActionSlot.name = 'drawer-header-action';
    headerAction.append(headerActionSlot);
    header.append(headerTitleContent, headerAction);
    return header;
}, _CpDrawer_renderContent = function _CpDrawer_renderContent() {
    const content = document.createElement('div');
    content.classList.add('cp-drawer-content');
    const contentSlot = document.createElement('slot');
    content.append(contentSlot);
    return content;
}, _CpDrawer_disposeDirection = function _CpDrawer_disposeDirection() {
    const direction = this.getAttribute('direction');
    __classPrivateFieldSet(this, _CpDrawer_direction, direction || 'right', "f");
}, _CpDrawer_disposeDrawerClass = function _CpDrawer_disposeDrawerClass(isShow = true) {
    if (isShow) {
        this.maskContent.classList.add(`cp-drawer-${__classPrivateFieldGet(this, _CpDrawer_direction, "f")}-container`);
        this.maskContent.classList.remove(`cp-drawer-${__classPrivateFieldGet(this, _CpDrawer_direction, "f")}-close-container`, 'cp-drawer-close-container');
    }
    else {
        this.maskContent.classList.remove(`cp-drawer-${__classPrivateFieldGet(this, _CpDrawer_direction, "f")}-container`);
        this.maskContent.classList.add(`cp-drawer-${__classPrivateFieldGet(this, _CpDrawer_direction, "f")}-close-container`, 'cp-drawer-close-container');
    }
};
CpDrawer = CpDrawer_1 = __decorate([
    style({
        '.cp-drawer-container': {
            backgroundColor: '#fff',
            boxShadow: '-5px 0px 15px rgba(0,0,0,0.2)',
            overflow: 'auto',
        },
        '.cp-drawer-close-container': {
            opacity: '0',
        },
        // right
        '.cp-drawer-right-container': {
            top: '0',
            right: '0',
            minWidth: '35vw',
            height: '100vh',
            animation: 'right-show .3s ease-in-out',
        },
        '.cp-drawer-right-close-container': {
            right: '0',
            top: '0',
            minWidth: '35vw',
            height: '100vh',
            animation: 'right-close .3s ease-in-out',
        },
        // left
        '.cp-drawer-left-container': {
            left: '0',
            top: '0',
            minWidth: '35vw',
            height: '100vh',
            animation: 'left-show .3s ease-in-out',
        },
        '.cp-drawer-left-close-container': {
            left: '0',
            top: '0',
            minWidth: '35vw',
            height: '100vh',
            animation: 'left-close .3s ease-in-out',
        },
        // top
        '.cp-drawer-top-container': {
            width: '100%',
            minHeight: '40vh',
            left: '0',
            top: '0',
            animation: 'top-show .3s ease-in-out',
        },
        '.cp-drawer-top-close-container': {
            width: '100%',
            minHeight: '40vh',
            left: '0',
            top: '0',
            animation: 'top-close .3s ease-in-out',
        },
        // bottom
        '.cp-drawer-bottom-container': {
            width: '100%',
            minHeight: '40vh',
            left: '0',
            bottom: '0',
            animation: 'bottom-show .3s ease-in-out',
        },
        '.cp-drawer-bottom-close-container': {
            width: '100%',
            minHeight: '40vh',
            left: '0',
            bottom: '0',
            animation: 'bottom-close .3s ease-in-out',
        },
        '.cp-drawer-content': {
            padding: '10px',
        },
        '.cp-drawer-header': {
            display: 'flex',
            justifyContent: 'space-between',
            minHeight: '80px',
            boxSizing: 'border-box',
            padding: '10px',
            alignItems: 'center',
            borderBottom: '1px solid #eee',
        },
        '.cp-drawer-header-title-content': {
            display: 'flex',
            alignItems: 'center',
            height: '60px',
            fontSize: '24px',
        },
        '.cp-drawer-header-title-content .cp-drawer-header-close-icon': {
            marginRight: '10px',
            cursor: 'pointer',
            width: '1em',
            height: '1em',
            transition: 'transform .3s ease-in-out',
        },
        '.cp-drawer-header-title-content .cp-drawer-header-close-icon:hover': {
            transform: 'rotate(90deg)',
        },
        '.cp-drawer-header-title-content .cp-drawer-header-title': {
            fontSize: '1em',
        },
        '.cp-drawer-header-action': {
            minWidth: '35vw',
            height: '100%',
        },
        '.cp-drawer-footer-content': {
            height: '80px',
            borderTop: '1px solid #eee',
            position: 'absolute',
            width: '100%',
            bottom: '0',
            boxSizing: 'border-box',
            padding: '10px',
        },
    }),
    keyframe({
        'right-show': {
            '0%': {
                opacity: '0',
                // 100% 是相对于自身宽度
                transform: 'translateX(100%)',
            },
            '100%': {
                transform: 'translateX(0)',
            },
        },
        'right-close': {
            '0%': {
                opacity: '1',
                transform: 'translateX(0)',
            },
            '100%': {
                opacity: '0',
                transform: 'translateX(100%)',
            },
        },
        'left-show': {
            '0%': {
                opacity: '0',
                transform: 'translateX(-100%)',
            },
            '100%': {
                opacity: '1',
                transform: 'translateX(0)',
            },
        },
        'left-close': {
            '0%': {
                opacity: '1',
                transform: 'translateX(0)',
            },
            '100%': {
                opacity: '0',
                transform: 'translateX(-100%)',
            },
        },
        'top-show': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-100%)',
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)',
            },
        },
        'top-close': {
            '0%': {
                opacity: '1',
                transform: 'translateY(0)',
            },
            '100%': {
                opacity: '0',
                transform: 'translateY(-100%)',
            },
        },
        'bottom-show': {
            '0%': {
                opacity: '0',
                transform: 'translateY(100%)',
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)',
            },
        },
        'bottom-close': {
            '0%': {
                opacity: '1',
                transform: 'translateY(0)',
            },
            '100%': {
                opacity: '0',
                transform: 'translateY(100%)',
            },
        },
    })
], CpDrawer);
var CpDrawer$1 = CpDrawer;

export { CpDrawer$1 as default };

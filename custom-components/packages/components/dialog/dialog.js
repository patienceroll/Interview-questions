import { __decorate, __classPrivateFieldGet, __classPrivateFieldSet, __awaiter } from '../../../node_modules/tslib/tslib.es6.js';
import { disposeDomNodeStyle } from '../../utils/style.js';
import { style, keyframe } from '../../utils/decorators.js';
import CpMask from '../mask/mask.js';

var _CpDialog_instances, _CpDialog_closeIcon, _CpDialog_mousePosition, _CpDialog_renderHeader, _CpDialog_renderContent, _CpDialog_renderFooter;
var CpDialog_1;
const icon = '<svg  t=\'1632705635683\' class=\'close-icon\' viewBox=\'0 0 1024 1024\' version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' p-id=\'2363\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' width=\'100%\' height=\'100%\'><defs><style type=\'text/css\'></style></defs><path width=\'100%\' height=\'100%\' d=\'M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z\' fill=\'#444444\' p-id=\'2364\'></path></svg>';
let CpDialog = CpDialog_1 = class CpDialog extends CpMask {
    constructor() {
        super();
        _CpDialog_instances.add(this);
        _CpDialog_closeIcon.set(this, void 0);
        // 鼠标位置
        _CpDialog_mousePosition.set(this, { x: '', y: '' });
        this.maskContent.classList.add('cp-dialog-modal-content');
        this.maskContent.append(__classPrivateFieldGet(this, _CpDialog_instances, "m", _CpDialog_renderHeader).call(this), __classPrivateFieldGet(this, _CpDialog_instances, "m", _CpDialog_renderContent).call(this), __classPrivateFieldGet(this, _CpDialog_instances, "m", _CpDialog_renderFooter).call(this));
        this.shadowRoot.adoptedStyleSheets = [
            ...this.shadowRoot.adoptedStyleSheets,
            CpDialog_1.styleSheet,
            CpDialog_1.keyframesSheet,
        ];
    }
    disconnectedCallback() {
        var _a;
        (_a = __classPrivateFieldGet(this, _CpDialog_closeIcon, "f")) === null || _a === void 0 ? void 0 : _a.removeEventListener('click', this.close.bind(this), false);
    }
    /**
     * @method 设置鼠标点击位置
     * @param isShow 是否展示弹窗
     */
    disposemousePosition(isShow = true) {
        if (isShow) {
            const { x, y } = window.event;
            __classPrivateFieldSet(this, _CpDialog_mousePosition, { x: `${x}`, y: `${y}` }, "f");
        }
        const { x, y } = __classPrivateFieldGet(this, _CpDialog_mousePosition, "f");
        // 弹窗
        if (isShow) {
            disposeDomNodeStyle(this.maskContent, {
                left: `${x}px`,
                top: `${y}px`,
                transform: 'scale(0,0)',
                opacity: '0',
            });
            setTimeout(() => {
                disposeDomNodeStyle(this.maskContent, {
                    left: '50%',
                    top: '20%',
                    transform: 'scale(1,1) translateX(-50%)',
                    opacity: '1',
                });
            }, 300);
        }
        else {
            return new Promise((resolve) => {
                disposeDomNodeStyle(this.maskContent, {
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: 'scale(0.5,0.5)',
                    opacity: '0',
                });
                setTimeout(() => {
                    resolve('close');
                }, 300);
            });
        }
    }
    onMaskShow() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.disposemousePosition();
        });
    }
    onMaskClose() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.disposemousePosition(false);
        });
    }
};
_CpDialog_closeIcon = new WeakMap(), _CpDialog_mousePosition = new WeakMap(), _CpDialog_instances = new WeakSet(), _CpDialog_renderHeader = function _CpDialog_renderHeader() {
    const title = this.getAttribute('title');
    const header = document.createElement('header');
    header.classList.add('cp-dialog-header');
    const headerTitle = document.createElement('div');
    headerTitle.classList.add('cp-dialog-header-title');
    const headerTitleSlot = document.createElement('slot');
    headerTitleSlot.name = 'dialog-title';
    headerTitle.innerHTML = title ? `<span>${title}</span>` : '';
    headerTitle.append(headerTitleSlot);
    const closeIcon = document.createElement('div');
    closeIcon.innerHTML = icon;
    closeIcon.classList.add('cp-dialog-header-close-icon');
    closeIcon.addEventListener('click', this.close.bind(this), false);
    header.append(headerTitle, closeIcon);
    __classPrivateFieldSet(this, _CpDialog_closeIcon, closeIcon, "f");
    return header;
}, _CpDialog_renderContent = function _CpDialog_renderContent() {
    const content = document.createElement('div');
    content.classList.add('cp-dialog-content');
    const contentSlot = document.createElement('slot');
    content.append(contentSlot);
    return content;
}, _CpDialog_renderFooter = function _CpDialog_renderFooter() {
    const footer = document.createElement('div');
    footer.classList.add('cp-dialog-footer');
    const footerSlot = document.createElement('slot');
    const confirm = document.createElement('cp-button');
    const cancel = document.createElement('cp-button');
    confirm.append('确认');
    cancel.append('取消');
    confirm.classList.add('cp-dialog-footer-confirm-button');
    cancel.classList.add('cp-dialog-footer-cancel-button');
    footer.append(cancel, confirm);
    footerSlot.name = 'dialog-footer';
    return footer;
};
CpDialog = CpDialog_1 = __decorate([
    style({
        '.cp-dialog-modal-content': {
            top: '20%',
            minWidth: '30%',
            left: '50%',
            transform: 'translateX(-50%)',
            transition: 'all .3s ease-in-out',
            backgroundColor: '#fff',
        },
        '.cp-dialog-header': {
            display: 'flex',
            justifyContent: 'space-between',
            minHeight: '70px',
            alignItems: 'center',
            borderBottom: '1px solid #eee',
            fontSize: '20px',
            padding: '10px',
            boxSizing: 'border-box',
        },
        '.cp-dialog-header .cp-dialog-header-close-icon': {
            marginRight: '10px',
            cursor: 'pointer',
            width: '1em',
            height: '1em',
            transition: 'transform .3s ease-in-out',
        },
        '.cp-dialog-header .cp-dialog-header-close-icon:hover': {
            transform: 'rotate(90deg)',
        },
        '.cp-dialog-header .cp-dialog-header-title': {
            fontSize: '1em',
        },
        '.cp-dialog-content': {
            padding: '10px',
            minHeight: '200px',
        },
        '.cp-dialog-footer': {
            height: '70px',
            borderTop: '1px solid #eee',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            boxSizing: 'border-box',
        },
        '.cp-dialog-footer .cp-dialog-footer-cancel-button': {
            marginRight: '10px',
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
        hiden: {
            '0%': {
                opacity: '1',
            },
            '100%': {
                opacity: '0',
            },
        },
    })
], CpDialog);
var CpDialog$1 = CpDialog;

export { CpDialog$1 as default };

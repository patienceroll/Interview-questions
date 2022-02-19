import { __decorate, __classPrivateFieldSet, __classPrivateFieldGet, __awaiter } from '../../../node_modules/tslib/tslib.es6.js';
import { style, keyframe } from '../../utils/decorators.js';
import CpMask from '../mask/mask.js';

var _CpMessage_message, _CpMessage_timer;
var CpMessage_1;
let CpMessage = CpMessage_1 = class CpMessage extends CpMask {
    constructor() {
        super(false);
        _CpMessage_message.set(this, void 0);
        _CpMessage_timer.set(this, 0);
        const message = document.createElement('div');
        this.maskContent.classList.add('cp-message-content');
        __classPrivateFieldSet(this, _CpMessage_message, message, "f");
        this.maskContent.append(message);
        if (this.shadowRoot) {
            this.shadowRoot.adoptedStyleSheets = [
                ...this.shadowRoot.adoptedStyleSheets,
                CpMessage_1.styleSheet,
                CpMessage_1.keyframesSheet,
            ];
        }
    }
    showMessage({ message, duration = 3000 }) {
        if (message instanceof HTMLElement) {
            __classPrivateFieldGet(this, _CpMessage_message, "f").append(message);
        }
        else {
            __classPrivateFieldGet(this, _CpMessage_message, "f").innerHTML = message;
        }
        this.show();
        __classPrivateFieldSet(this, _CpMessage_timer, setTimeout(() => {
            this.close();
            clearTimeout(__classPrivateFieldGet(this, _CpMessage_timer, "f"));
        }, duration), "f");
    }
    onMaskShow() {
        return __awaiter(this, void 0, void 0, function* () {
            this.maskContent.classList.add('cp-message-show');
            this.maskContent.classList.toggle('cp-message-close', false);
        });
    }
    onMaskClose() {
        return __awaiter(this, void 0, void 0, function* () {
            clearTimeout(__classPrivateFieldGet(this, _CpMessage_timer, "f"));
            this.maskContent.classList.replace('cp-message-show', 'cp-message-close');
        });
    }
};
_CpMessage_message = new WeakMap(), _CpMessage_timer = new WeakMap();
CpMessage = CpMessage_1 = __decorate([
    style({
        '.cp-message-content': {
            top: '100px',
            left: '50%',
            height: '40px',
            borderRadius: '10px',
            transform: 'translateX(-50%)',
            backgroundColor: 'pink',
            color: '#fff',
            overflow: 'hidden',
            textAlign: 'ctenter',
            padding: '10px 20px',
            border: '1px solid #eee',
            display: 'flex',
            alignItems: 'center',
        },
        '.cp-message-show': {
            animation: 'show-message .3s ease-in-out',
            opacity: '1',
        },
        '.cp-message-close': {
            animation: 'close-message .3s ease-in-out',
            opacity: '0',
        },
    }),
    keyframe({
        'show-message': {
            '0%': {
                transform: 'translate(-50%,-100px)',
                opacity: '0',
            },
            '100%': {
                transform: 'translate(-50%,0)',
                opacity: '1',
            },
        },
        'close-message': {
            '0%': {
                transform: 'translate(-50%,0)',
                opacity: '1',
            },
            '100%': {
                transform: 'translate(-50%,-100px)',
                opacity: '0',
            },
        },
    })
], CpMessage);
var CpMessage$1 = CpMessage;

export { CpMessage$1 as default };

import { __decorate } from '../../../node_modules/tslib/tslib.es6.js';
import { style, keyframe } from '../../utils/decorators.js';

var CpRipple_1;
let CpRipple = CpRipple_1 = class CpRipple extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.adoptedStyleSheets = [CpRipple_1.keyframesSheet, CpRipple_1.styleSheet];
        const child = document.createElement('slot');
        shadowRoot.appendChild(child);
    }
    /** 涟漪颜色,默认 #fff  */
    get rippleColor() {
        return this.getAttribute('ripple-color') || '#fff';
    }
    /** ### 触发涟漪扩散 */
    get spread() {
        return function (options) {
            const { pow, sqrt, abs } = Math;
            const { top, left } = options;
            const { clientWidth, clientHeight } = this;
            const ripple = document.createElement('div');
            // 计算涟漪半径,涟漪中心点到父元素四个点之中最远的一个点的距离为半径
            const offsetRight = abs(left - clientWidth);
            const offsetBootom = abs(clientHeight - top);
            const radiusAdjacentWidth = offsetRight > left ? offsetRight : left;
            const radiusAdjacentHeight = offsetBootom > top ? offsetBootom : top;
            const radius = sqrt(pow(radiusAdjacentWidth, 2) + pow(radiusAdjacentHeight, 2));
            ripple.style.top = `${top - radius}px`;
            ripple.style.left = `${left - radius}px`;
            ripple.style.width = `${2 * radius}px`;
            ripple.style.height = `${2 * radius}px`;
            ripple.style.background = this.rippleColor;
            ripple.classList.add('ripple', 'spread');
            this.shadowRoot.appendChild(ripple);
            return {
                dom: ripple,
                /** 清除ripple */
                stable: () => {
                    setTimeout(() => {
                        ripple.classList.add('stable');
                        setTimeout(() => {
                            ripple.remove();
                        }, 450);
                    }, 150);
                },
            };
        };
    }
};
CpRipple = CpRipple_1 = __decorate([
    style({
        '.stable': {
            opacity: '0',
        },
        '.spread': {
            animation: 'spread 600ms forwards',
            opacity: '0.3',
        },
        '.ripple': {
            position: 'absolute',
            borderRadius: '50%',
            transition: 'opacity ease 450ms',
            opacity: '0',
        },
        ':host': {
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            display: 'inline-block',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '0',
            borderRadius: 'inherit',
        },
    }),
    keyframe({
        spread: {
            '0%': {
                transform: 'scale(0)',
            },
            '100%': {
                transform: 'scale(1)',
            },
        },
    })
], CpRipple);
var Ripple = CpRipple;

export { Ripple as default };

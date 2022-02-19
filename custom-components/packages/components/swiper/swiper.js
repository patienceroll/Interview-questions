import { __decorate } from '../../../node_modules/tslib/tslib.es6.js';
import { watch } from '../../utils/decorators.js';

let CpSwiper = class CpSwiper extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const h1 = document.createElement('h1');
        h1.innerHTML = 'hello world';
        shadowRoot.append(h1);
    }
    /**开始轮播 */
    start() { }
    /** 暂停轮播 */
    pause() { }
};
CpSwiper = __decorate([
    watch({
        list(oldList, newList) {
            console.log('watch-list', oldList, newList);
        },
        type(oldVal, newVal) {
            console.log('watch-type', oldVal, newVal);
        },
        autoPlay(oldVal, newVal) {
            console.log('watch-auto-play', oldVal, newVal);
        },
    })
], CpSwiper);
var CpSwiper$1 = CpSwiper;

export { CpSwiper$1 as default };

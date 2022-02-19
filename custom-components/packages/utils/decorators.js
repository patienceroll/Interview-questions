import { formatStyle, formatKeyframes } from './style.js';

/** 自定义组件样式装饰器 */
function style(param) {
    return function styledecorators(target) {
        target.styleSheet = formatStyle(param);
    };
}
/** 自定义组件动画装饰器 */
function keyframe(param) {
    return function styledecorators(target) {
        target.keyframesSheet = formatKeyframes(param);
    };
}
/** 监听变化的属性值装饰器 */
function watch(watcher) {
    return function (targetClass) {
        targetClass.observedAttributes = Object.keys(watcher);
        targetClass.prototype.attributeChangedCallback = function (attr, older, newer) {
            if (typeof watcher[attr] === 'function')
                watcher[attr].apply(this, [newer, older]);
        };
    };
}

export { keyframe, style, watch };

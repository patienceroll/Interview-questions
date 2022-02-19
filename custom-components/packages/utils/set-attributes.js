/** ### 给 Element 设置多个属性 */
function setAttributes(target, attrs) {
    Object.keys(attrs).forEach((key) => target.setAttribute(key, attrs[key]));
}

export { setAttributes as default };

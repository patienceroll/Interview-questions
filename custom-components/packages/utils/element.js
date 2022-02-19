/** ### 创建html元素（包括自定义组件）
 * - 此方法暂时还没有包含 createElement 的 is 配置
 */
function createHtmlElement(tagName) {
    return document.createElement(tagName);
}
/** ### 创建svg元素 */
function createSvgElement(tagName) {
    return document.createElementNS('http://www.w3.org/2000/svg', tagName);
}
/** ## 向html定义 custom components */
function defineCustomComponents(name, componentsClass) {
    if (!customElements.get(name))
        customElements.define(name, componentsClass);
}

export { createHtmlElement, createSvgElement, defineCustomComponents };

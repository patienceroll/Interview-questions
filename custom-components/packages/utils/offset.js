/**
 * ### 获取HTML元素相对于body的left偏移
 */
function getOffsetLeft(target) {
    const { offsetLeft, offsetParent } = target;
    if (offsetParent instanceof HTMLElement)
        return getOffsetLeft(offsetParent) + offsetLeft;
    return offsetLeft;
}

export { getOffsetLeft };

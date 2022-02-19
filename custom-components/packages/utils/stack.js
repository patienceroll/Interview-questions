class Stack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        var _a;
        this.stack.push(item);
        this.top = item;
        (_a = this.finished) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    remove(item) {
        var _a;
        if (item) {
            this.stack = this.stack.filter((i) => i !== item);
        }
        else {
            item = this.stack.pop();
        }
        this.top = this.stack[this.stack.length - 1];
        (_a = this.finished) === null || _a === void 0 ? void 0 : _a.call(this, item);
    }
    getLength() {
        return this.stack.length;
    }
    /** 删除或增加元素的回调 */
    finished(oldTop) { }
}

export { Stack as default };

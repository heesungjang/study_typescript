class Stack {
    private data: any[] = [];

    constructor() {}

    push(item: any): void {
        this.data.push(item);
    }

    pop(): any {
        return this.data.pop();
    }
}

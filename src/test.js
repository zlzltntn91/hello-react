function arrowTest() {

    this.name = "arrow";
    this.kindOf = "constructor";

    return {
        name: 'inner',
        test: () => console.log(this.name),
        test2: function () {
            console.log(this.name);
        }
    }
}

let arrow = new arrowTest();

console.info(arrow.test());
console.dir(arrow.test2());

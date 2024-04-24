class WowWow {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}!`);
    }

    wow() {
        console.log("Wow!");
    }
}

const myWow = new WowWow("World");
myWow.greet();
myWow.wow();
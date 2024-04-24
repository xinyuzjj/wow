// index.js

const _ = require('lodash');

class WowWow {
    constructor(name) {
        this.name = name;
        this.dependencies = ['lodash'];
    }

    greet() {
        console.log(`Hello, ${this.name}!`);
    }

    wow() {
        console.log("Wow!");
    }

    times(n) {
        _.times(n, () => {
            console.log("Wow!");
        });
    }

    addDependency(dep) {
        this.dependencies.push(dep);
    }

    listDependencies() {
        console.log(`Dependencies: ${this.dependencies.join(', ')}`);
    }
}

module.exports = WowWow;
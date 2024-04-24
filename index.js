// index.js

const _ = require('lodash');

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

    times(n) {
        _.times(n, () => {
            console.log("Wow!");
        });
    }
}

module.exports = WowWow;
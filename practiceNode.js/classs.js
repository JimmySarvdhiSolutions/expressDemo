class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

const user1 = new User("Jimy");
user1.greet(); // Hello, Alice
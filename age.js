class Cadet {
    constructor(name, rank, age) {
        this.name = name;
        this.rank = rank;
        this.age = age;
    }

    introduce() {
        console.log(`Cadet ${this.name}, reporting for duty! I am ${this.rank} and ${this.age} years old.`);
    }
}

// Create an instance of the Cadet class
const newCadet = new Cadet('John Doe', 'Private', 20);

// Introduce the cadet
newCadet.introduce();

class User {
    firstName: string;
    lastName: string;
    get fullName(): string {
        return `${this.firstName}, ${this.lastName}`;
    }

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user = new User("heesung", "jang");

console.log(user.fullName);

user.firstName = "zion";

console.log(user.fullName);

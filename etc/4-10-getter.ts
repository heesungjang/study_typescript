{
    class User {
        get fullName(): string {
            return `${this.firstName}, ${this.lastName}`;
        }

        private internalAge = 4;

        get age(): number {
            return this.internalAge;
        }

        set age(num: number) {
            this.internalAge = num;
        }

        constructor(private firstName: string, private lastName: string) {}
    }

    const user = new User("heesung", "jang");

    user.age = 6;

    console.log(user.fullName);
}

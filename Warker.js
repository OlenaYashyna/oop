class Warker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}

let user = new Warker ('Yep', 'Cam', 1000, 25);
user.getSalary();


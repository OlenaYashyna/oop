class Warker {
    constructor(name, surname, rate, days) {
        this.getName = function () {
            return name;
        };
        this.getSurname = function () {
            return surname;
        };
        this.setRate = function (value) {
            return rate = value;
        };
        this.getRate = function () {
            return rate;
        };
        this.setDays = function (value) {
            return days = value;
        };
        this.getDays = function () {
            return days;
        };
        this.getSalary = function () {
            return rate * days;
        }
    }
}


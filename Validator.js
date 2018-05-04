function Validator () {
    const isValid = {
        mail: /\w{4,}@[a-z]i{4,}\.[a-z]i{3,}/,
        domain: /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/,
        date: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
        phone: /^\+\d{12}$/
    }
    this.isEmail = function (value) {
        return isValid.mail.test(value);
    }
    this.isDomain = function (value) {
       return isValid.domain.test(value);
    }
    this.isDate = function (value) {
      return isValid.date.test(value);
    }
    this.isPhone = function (value) {
        return isValid.phone.test(value);
    }
}

const validator = new Validator();


console.log(validator.isEmail('phphtml@mail.ru'));

console.log(validator.isDomain('phphtml.net'));

console.log(validator.isDate('12.05.2020'));

console.log(validator.isPhone('+380989817689')); //тут можете валидировать наличия плюса в начале номера и код страны
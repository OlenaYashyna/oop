class MyString {

    reverse(str) {
        let newStr = '';
    for (let i = str.length-1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
    }

    ucFirst(str) {
        let newStr = str[0].toUpperCase();
        for (let i = 1; i < str.length; i++) {
            newStr +=  str[i];
        }
        return newStr;
    }
    ucWords(str) {
        let newStr = str[0].toUpperCase();
        for (let i = 1; i < str.length; i++) {
            newStr += (str[i - 1] === ' ') ? str[i].toUpperCase() : str[i];
        }
        return newStr;
    }

}

class MyString {
    constructor(str){
        this.str = str
    }
    reverse(){
        return this.str.split("").reverse().join("")
    }
    ucFirst(str){
        return this.str[0].toUpperCase() + this.str.substr(1)
    }
    ucWords(str){
        return this.str.split(" ").reduce((item, el) => {
            return item = [...item, el[0].toUpperCase() + this.str.substr(1)]
        }, []).join(" ")
    }
}
const str2 = new MyString('abcd');


console.log(str2.reverse());   //dcba


class MyString {

    reverse(str){
        return str.split("").reverse().join("")
    }
    ucFirst(str){
        return str[0].toUpperCase() + str.substr(1)
    }
    ucWords(str){
        return str.split(" ").reduce((item, el) => {
            return item = [...item, el[0].toUpperCase() + str.substr(1)]
        }, []).join(" ")
    }
}
const str = new MyString();

console.log('dfvdafv');
console.log(str.reverse('abcde')); //выведет 'edcba'


console.log(str.ucFirst('abcde')); //выведет 'Abcde'

console.log(str.ucWords('abcde abcde abcde'));


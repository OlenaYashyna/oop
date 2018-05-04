function count() {
    let counter = 0;
    return function () {
        return counter += 1;
    }
}

let newCount = count();

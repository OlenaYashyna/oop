class List {
    constructor(place, options) {
        this.place = place;
        this.options - options;
}
}

function render() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    
}





















const options = {
    ctrl: true,         // если true - позволить выбор нескольких элементов списка с нажатой кнопкой ctrl
    parentElement: 'ul',     // родительский элемент списка ul, ol, div - чего душа желает
    itemElement: 'li',          // элемент списка li, div ....
    arrOfItems: ['1', '2', '3', '4', '5'],    // массив элементов которые будут изначально добавлены в список
    onCreate: func,      // функция, которая будет выполнена при событии создания элемента списка
    onDelete: func,      // функция, которая будет выполнена при событии удаления элемента списка
}


const list = new List(document.body, {
    ctrl: true,
    parentElement: 'ul',
    itemElement: 'li',
    arrOfItems: ['1', '2', '3', '4', '5'],
    onCreate: showCreateAlert,
    onDelete: showDeleteAlert,
});

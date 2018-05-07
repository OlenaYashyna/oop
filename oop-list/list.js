class List{
    constructor(parentEl, options) {
        this.parentEl = parentEl;
        this.options = options || {};

        this.data = options.arrOfItems || [];

        this.createHeader(parentEl);

        this.list = document.createElement(this.options.parentElement);
        parentEl.appendChild(this.list);
    }

    createHeader(element) {
        const container = document.createElement('div');
        container.className = 'input-block';

        const input = document.createElement('input');
        input.type = 'text';
        container.appendChild(input);

        const button = document.createElement('button');
        button.id = 'btn-add';
        button.innerHTML = '+';
        container.appendChild(button);

        element.appendChild(container);

        button.addEventListener('click', () => {
            this.add(input.value)
            input.value = null;
        });
        const buttonDel = document.createElement('button');
        buttonDel.id = 'btn-rem';
        buttonDel.innerHTML = '-';
        container.appendChild(buttonDel);

        buttonDel.addEventListener('click', () => {
            //this.showDeleteAlert();
            var result = confirm('Delete?');
            if (result === true) {
                const elCollection = document.getElementsByClassName('selected');
                for(var i = 0; i < elCollection.length; i ++) {
                    let index = elCollection[i].getAttribute('index');
                    let num = elCollection.length;
                    this.remove(index, num);
                }
            }
        });
    }


    add(item){
        this.data.push(item);
        this.render();
        if (typeof this.options.onCreate === 'function')
            this.options.onCreate(item);
    }

    remove(index, num) {
        this.data.splice(index, num);
        this.render();
    }

    render() {
        this.list.innerHTML = '';
        this.data.forEach((item, index) => {
            var elem = document.createElement(this.options.itemElement);
            elem.innerHTML = item;
            elem.setAttribute('index', index);;
            elem.addEventListener('click', () => {
                const btn = document.getElementsByTagName('button')[1];
                if (elem.classList.contains('selected')) {
                    elem.classList.remove('selected');
                    //if (! document.getElementsByClassName('selected'))
                    btn.setAttribute('id', 'btn-rem');
                } else {
                    elem.classList.add('selected');
                    btn.setAttribute('id', 'btn-inline');
                }


            });
            this.list.appendChild(elem);

        })
    }
}


function showCreateAlert(item) {
    alert(`${item} was added`)
};
//function showDeleteAlert() {
//    var result = confirm('Delete?');
//        if (result === true) {
//            const elCollection = document.getElementsByClassName('selected');
//            for(var i = 0; i < elCollection.length; i ++) {
//                let index = elCollection[i].getAttribute('index');
//                let num = elCollection.length;
//                this.remove(index, num);
//            }
//        }
//}


const list = new List(document.body, {
    ctrl: true,
    parentElement: 'ul',
    itemElement: 'li',
    arrOfItems: ['1', '2', '3', '4', '5'],
    onCreate: showCreateAlert,
    //onDelete: showDeleteAlert,
});
list.render();



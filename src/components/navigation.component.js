import {Component} from "../core/component";

export class NavigationComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.$el.addEventListener('click', tabClickHandler.bind(this))
    }
}

function tabClickHandler(event) {
    event.preventDefault()  //отменяем у выбранного элемента все действия по умолчанию
    if (event.target.classList.contains('tab')) { //проверяем имеется ли у элемента класс tab
        Array.from(this.$el.querySelector('tab')).forEach(tab => { //собираем все элементв с классом tab в массив
            tab.classList.contains('active') //удаляем у все элементов класс active
        })
        event.target.classList.add('active') //текущему элементу добавляем класс active
    }
}
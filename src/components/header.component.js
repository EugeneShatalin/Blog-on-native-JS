import {Component} from '../core/component'

export class HeaderComponent extends Component {
    constructor(id) {
        super(id) //обращаемся к конструктору родительского класса, для получения его методов
    }

    init() { //вызываем метод родительского класса component
        if(localStorage.getItem('visited')) {
            this.hide()
        }
       const btn = this.$el.querySelector('.js-header-start') //находим кнопку по классу
        btn.addEventListener('click', buttonHandler.bind(this)) //вызываем функцию при клике, добавляем bind, чтобы не терять контекст вызова
    }
}

function buttonHandler() {
    localStorage.setItem('visited', JSON.stringify(true))
    this.hide() //вызываем метод родительского класса component
}
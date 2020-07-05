export class Component {
    constructor (id) {
        this.$el = document.getElementById(id) //получаем элемент по id
        this.init() //этот метод вызоветься сразу за получением элемента, в нем можно реализовать логику в дочерних классах, которая сразу будет отрабатывать
    }

    init() {} //пустой метод для реализации логики в дочерних классах

    onHide() {

    }

    onShow() {

    }

    hide() {
        this.$el.classList.add('hide') //добавляем элементу класс hide
        this.onHide()
    }

    show() {
        this.$el.classList.remove('hide') //удаляем элементу класс hide
        this.onShow()
    }
}
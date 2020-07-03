import {Component} from "../core/component";

export class NavigationComponent extends Component {
    constructor(id) {
        super(id)

        this.tabs = [] //масссив для сохранения компонент меню
    }

    init() {
        this.$el.addEventListener('click', tabClickHandler.bind(this))
    }

    registerTabs(tabs) {
        this.tabs = tabs //метод для передаци в массив всех компонент меню
    }
}

function tabClickHandler(event) {
    event.preventDefault()  //отменяем у выбранного элемента все действия по умолчанию
    if (event.target.classList.contains('tab')) { //проверяем имеется ли у элемента класс tab
        Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => { //собираем все элементв с классом tab в массив
            tab.classList.remove('active') //удаляем у все элементов класс active
        })
        event.target.classList.add('active') //текущему элементу добавляем класс active

        const activeTab = this.tabs.find(t => t.name === event.target.dataset.name) //
        this.tabs.forEach(t => t.component.hide())
        activeTab.component.show()
    }
}
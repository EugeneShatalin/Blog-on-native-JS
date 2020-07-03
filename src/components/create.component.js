import {Component} from '../core/component'
import {Form} from '../core/form'

export class CreateComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.$el.addEventListener('submit', submitHandler.bind(this))

        this.form = new Form(this.$el, { //создаем класс form, передаем в него сам элемент формы и объект с валидаторами
            title: [],
            fulltext: []
        })
    }


}

function submitHandler(event) {
    event.preventDefault() //отменяем стандартное поведение (чтоб не перезагружалась форма)

    const formData = { //собираем данные из формы в объект, реализовано двумя разными способами для поля с селектом и для полей без него
        type: this.$el.type.value, //сохраняем значение из поля формы с селектом
            ...this.form.value() //получаем остальные значения их формы
    }

console.log('Submit', formData, this.form.value())
}
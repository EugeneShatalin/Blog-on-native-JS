import {Component} from '../core/component'
import {Form} from '../core/form'
import {Validators} from '../core/validators'

export class CreateComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.$el.addEventListener('submit', submitHandler.bind(this))

        this.form = new Form(this.$el, { //создаем класс form, передаем в него сам элемент формы и объект с валидаторами
            //название ключей обязательно совпадает с именами импутов формы, для простоты обработки
            title: [Validators.required],
            fulltext: [Validators.required, Validators.minLength(10)]
        })
    }
}

function submitHandler(event) {
    event.preventDefault() //отменяем стандартное поведение (чтоб не перезагружалась форма)

    if(this.form.isValid()) {
        const formData = { //собираем данные из формы в объект, реализовано двумя разными способами для поля с селектом и для полей без него
            type: this.$el.type.value, //сохраняем значение из поля формы с селектом
            ...this.form.value() //получаем остальные значения из формы
        }

        this.form.clear()

        console.log('Submit', formData)
    }
}
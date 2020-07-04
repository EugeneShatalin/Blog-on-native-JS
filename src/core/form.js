export class Form {
    constructor(form, controls) {
        this.form = form
        this.controls = controls
    }

    value() { //метод собирающий значения полей формы в объект value, переданных в объекте controls
        const value = {}
        Object.keys(this.controls).forEach(control => { //методом Object.keys берем ключи и с их помощью собираем данные из формы
            value[control] = this.form[control].value
        })
        return value
    }

    clear() {//метод для очистки всех полей формы
        Object.keys(this.controls).forEach(control => { //методом Object.keys берем ключи и с их помощью собираем данные из формы
            this.form[control].value = ''
        })
    }

    isValid() { //метод для проверки валидации полей формы
        let isFormValid = true //флаг для сохранения значения

        // по ключю получаем список валидаторов
        Object.keys(this.controls).forEach(control => {
            const validators = this.controls[control]

            //проверка на валидность каждого отдельного контрола
            let isValid = true //флаг для сохранения значения
            validators.forEach(validator => {
                isValid = validator(this.form[control].value) && isValid //чтобы учитывать предыдущее значение довил && isValid, если хоть одно значение окажеться false последующие не изменят вывод на true
            })

            isValid ? clearError(this.form[control]) : setError(this.form[control]) //устанавливаем либо очищаем ошибку

            isFormValid = isFormValid && isValid
        })

        return isFormValid
    }
}

function setError($control) { //метод установки ошибки
    console.log($control)
    const error = `<p class="validation-error">Введите корректное значение</p>`
    $control.classList.add('invalid') //инпуту с ошибкой добавляем класс
    $control.insertAdjacentHTML("afterend", error) //добавляем параграф после инпута с ошибкой
}

function clearError($control) { //метод удаления ошибки
    $control.classList.remove('invalid') //очищаем у инпута класс

    if($control.nextSibling) {
        $control.closest('.form-control').removeChild($control.nextSibling) //удаляем параграф с текстом ошибки
    }

}
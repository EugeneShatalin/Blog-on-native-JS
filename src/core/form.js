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

    isValid() {
        let isFormValid = true

        Object.keys(this.controls).forEach(control => {
            const validators = this.controls[control]

            let isValid = true
            validators.forEach(validator => {
                isValid = validator(this.form[control].value) && isValid
            })

            isFormValid = isFormValid && isValid
        })

        return isFormValid
    }
}
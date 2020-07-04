export class Validators {
    static required(value = '') { //валидатор проверки на пустоту
        return value && value.trim() //получаем строку, удаляем пробелы с обих концов (trim) и возвращает true если строка не пустая
    }

    static minLength(length) { //валидатор проверки на соответствие минимальному значению длины спомощью функции замыкания
        return value => {
            return value.length >= length
        }
    }
}
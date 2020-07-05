export class TransformService { //класс для преобразования полученых данных с сервера в массив
    static fbObjectToArray(fbData) {
        return Object.keys(fbData).map(key => {
            const item = fbData[key]
            item.id = key
            return item
        })
    }
}
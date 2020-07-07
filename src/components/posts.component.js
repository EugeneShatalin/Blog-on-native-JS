import {Component} from '../core/component'
import {apiService} from '../services/api.service'
import {TransformService} from '../services/transform.service'
import {renderPost} from '../templates/post.template'

export class PostsComponent extends Component {
    constructor(id, {loader}) {
        super(id)
        this.loader = loader
    }

    init() {
        this.$el.addEventListener('click', buttonHandler.bind(this))
    }

    async onShow() {
        this.loader.show()
        const fbData = await apiService.fetchPosts() //получение данных с сервера
        const posts = TransformService.fbObjectToArray(fbData) //преобразование данных в массив
        const html = posts.map(post => renderPost(post, {withButton: true})) //выводим посты
        this.loader.hide()
        this.$el.insertAdjacentHTML('afterbegin', html.join(' '))
    }

    onHide() {
        this.$el.innerHTML = '' //очищаем вкладку с постами при переключении на другую
    }
}

function buttonHandler(event) { //обработка килка по кнопке
    const $el = event.target //сохраняем в $el элемент по которому произошел клик
    const id = $el.dataset.id //присваеваем id хранящийся в data-id элемента по которому произошел клик, если такой параметр у него имеется

    if(id) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [] //берем данные из localStorage, если их нет, присваиваем пустой массив

       if (favorites.includes(id)) { //если в массиве favorites нет текущего id
           $el.textContent = 'Сохранить'
           $el.classList.add('button-primary')
           $el.classList.remove('button-danger')
           favorites = favorites.filter(fid => fid != id)
       } else { //если в массиве favorites есть текущий id
           $el.classList.add('button-danger')
           $el.classList.remove('button-primary')
           $el.textContent = 'Удалить'
           favorites.push(id)
       }
       localStorage.setItem('favorites', JSON.stringify(favorites)) //сохраняем в localStorage обновленные данные по id
    }

}
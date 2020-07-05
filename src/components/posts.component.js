import {Component} from "../core/component";
import {apiService} from '../services/api.service'
import {TransformService} from "../services/transform.service";

export class PostsComponent extends Component {
    constructor(id) {
        super(id)
    }

    async onShow() {
        const fbData = await apiService.fetchPosts() //получение данных с сервера
        const posts = TransformService.fbObjectToArray(fbData) //преобразование данных в массив
        console.log(posts)
    }
}


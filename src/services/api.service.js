class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl
    }

    async createPost(post) { //метод для отправки данных на сервер
        try {
            const request = new Request(this.url + '/post.json', {
                method: 'post',
                body: JSON.stringify(post)
            })
            return useRequest(request)
        } catch (error) {
            console.error(error)
        }
    }

    async fetchPosts() { //метод для получения данных с сервера
        try {
            const request = new Request(`${this.url}/post.json`, {
                method: 'get' //можно не указывать, идёт по умолчанию
            })
            return useRequest(request)
        }
        catch (error) {
            console.error(error)
        }
    }

    async fetchPostById(id) { //метод для получения данных с сервера одного поста по id
        try {
            const request = new Request(`${this.url}/post/${id}.json`, {
                method: 'get' //можно не указывать, идёт по умолчанию
            })
            return useRequest(request)
        }
        catch (error) {
            console.error(error)
        }
    }
}

async function useRequest(request) {
    const response = await fetch(request)
    return await response.json()
}

export const apiService = new ApiService('https://js-blog-sh.firebaseio.com') //базовый URL
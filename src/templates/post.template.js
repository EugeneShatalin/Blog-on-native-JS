export function renderPost(post, options = {}) {
    const tag = post.type === 'news' //выводим тип поста в зависимости от типа
        ? `<li class="tag tag-blue tag-rounded">Новость</li>`
        : `<li class="tag tag-rounded">Заметка</li>`

    const button = (JSON.parse(localStorage.getItem('favorites')) || []).includes(post.id) //проверка на содержание в localStorage id текущего поста и в соответствии с этим вывод нужной кнопки
        ? `<button class="button-round button-small button-danger" data-id="${post.id}">Удалит</button>`
        : `<button class="button-round button-small button-primary" data-id="${post.id}">Сохранить</button>`

    return `
        <div class="panel">
          <div class="panel-head">
            <p class="panel-title">${post.title}</p>
            <ul class="tags">
              ${tag}
            </ul>
          </div>
          <div class="panel-body">
            <p class="multi-line">${post.fulltext}</p>
          </div>
          <div class="panel-footer w-panel-footer">
            <small>${post.date}</small>
            ${ options.withButton ? button : ''}
          </div>
        </div>
    `
}
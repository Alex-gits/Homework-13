// Сюда я переместил все функции, которые имзеняют разметку.

const newsContainer = document.querySelector('.news-container .row');

// Функция для заполнения селекта новостными ресурсами

export function createSourceOptions(err, response) {
    const sourceArray = response.sources;

    for (let i = 0; i <= 15; i++) {
        const newSourceOption = `
      <option value=${sourceArray[i].id}>${sourceArray[i].name}</option>
      `;

        sources.insertAdjacentHTML('beforeend', newSourceOption);
        M.FormSelect.init(sources, newSourceOption);
    }
}

// Тимплейт для карточек новостей

function newsTemplate({ title, urlToImage, url, description }) {
    return `
    <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img src="${urlToImage || 'img/empty.jpg'}">
          <span class="card-title">${title || ''}</span>
        </div>
        <div class="card-content">
          <p>${description || ''}</p>
        </div>
        <div class="card-action">
          <a href="${url}">Read more</a>
        </div>
      </div>
    </div>
    `;
}

// Заполнение карточек новостями

export function renderNews(news) {
    clearContainer();

    let fragment = '';
    news.forEach(item => {
        const template = newsTemplate(item);
        fragment += template;
    });

    newsContainer.insertAdjacentHTML('afterbegin', fragment);
}

function clearContainer() {
    newsContainer.innerHTML = '';
}

// При изменении формы выводим полученные новости или если новостей нет то выводим уведомление
// При каждой загрузке новостей показывать прелодер
export function showLoader() {
    const template = `
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', template);
}

export function hideLoader() {
    const loader = document.querySelector('.progress');
    if (loader) {
        loader.remove();
    }
}
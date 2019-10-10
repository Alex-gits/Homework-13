// Домашнее задание

// Переписать News App на модули с использованием webpack. NewsService должен быть отдельным модулем, функции отвечающие за работу с UI также должны быть в отдельном модуле, http функция должна быть в отдельном модуле.


import { newsServiceModule } from './newsService';
import { createSourceOptions, showLoader, hideLoader, renderNews } from './ui';

const newsService = newsServiceModule();
const form = document.forms['newsControls'];
const countrySelect = form['country'];
const searchInput = form['search'];


document.addEventListener('DOMContentLoaded', function () {
    M.AutoInit();
    showLoader();
    loadNews();
    newsService.source(createSourceOptions);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    showLoader();

    if (searchInput.value) {
        newsService.everything(searchInput.value, onGetResponse);
    } else {
        newsService.topHeadlines(countrySelect.value, onGetResponse);
    }
});

function loadNews() {
    newsService.topHeadlines(countrySelect.value, onGetResponse);
}

function onGetResponse(err, res) {
    hideLoader();
    if (err) {
        console.warn(err);
        return;
    }

    if (!res.articles.length) {
        M.toast({ html: 'Новости по вашему запросу не найдены!' });
        return;
    }

    renderNews(res.articles);
}

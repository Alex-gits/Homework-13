import { customHttp } from './httpModule';

// Функция для получения массива новостей

const http = customHttp();
const sources = document.querySelector('#sources');

export function newsServiceModule() {
    const apiUrl = 'https://newsapi.org';
    const apiKey = '9c27b0f722b84da5a08312d2b125351b';
    const categories = document.querySelector('#categories');
    return {
        topHeadlines(country, cb) {
            http.get(`${apiUrl}/v2/top-headlines?country=${country}&category=${categories.value}&apiKey=${apiKey}`, cb);
        },
        everything(text, cb) {
            http.get(`${apiUrl}/v2/everything?qInTitle=${text}&sources=${sources.value}&apiKey=${apiKey}`, cb);
        },
        source(cb) {
            http.get(`${apiUrl}/v2/sources?&language=en&apiKey=${apiKey}`, cb)
        }
    }
}
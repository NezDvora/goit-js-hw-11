import { fetchQuery, PER_PAGE } from './fetchQuery';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Notify } from 'notiflix';

const searchForm = document.querySelector ('.search-from');
const searchInput = document.querySelector ('form-input');
const gallery = document.querySelector ('.gallery');
const marker = document.querySelector ('.marker');

const options = {
    rootMargin: 0,
    threshold: 1,
};

const observer = new IntersectionObserver(observerCallback, options);

let lightbox = new SimpleLightbox ('.gallery div a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    scrollZoom: false,
});

let page = 0;
searchForm.addEventListener ('submit', onSubmit);




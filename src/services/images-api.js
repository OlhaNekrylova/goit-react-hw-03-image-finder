const API_KEY = '32048668-e2fb2d2180cb5d2e63ce535ce';
const BASE_URL = 'https://pixabay.com/api';
const searchImage = this.state.searchImage;
const page = 1;
const perPage = 12;

function fetchImages() {
    return fetch(`${BASE_URL}/?q=${searchImage}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
    .then(response => {
        if (response.ok) {
            return response.json();
        }

        return Promise.reject(new Error(`no images`));
    });
};

const api = { fetchImages};

export default api;


import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

// Usando o Axios ao invés do "fetch" p q este permite, por exemplo, colocar uma BaseURL.

export default api;
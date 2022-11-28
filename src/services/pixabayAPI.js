import axios from 'axios';

const API_KEY = '30566454-f43afb5ebde56ee41a44e0f8d';

axios.defaults.baseURL = 'https://pixabay.com/api/';
// ?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12

export const getImages = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
};

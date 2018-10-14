import axios from 'axios';

export const getTemplateTestJson = () => {
  return axios.get('https://viserjs.github.io/assets/data/income.json');
};

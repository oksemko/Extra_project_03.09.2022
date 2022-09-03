import axios from 'axios';
axios.defaults.baseURL = 'https://yesno.wtf';
export const getAnswer = async () => {
  const {
    data: { answer },
  } = await axios.get('/api');
  return answer;
};

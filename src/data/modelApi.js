import axios from 'axios';

export const ModelApi = async () => {
  try {
    const response = await axios.get('https://cars-nodejs.vercel.app/models');
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

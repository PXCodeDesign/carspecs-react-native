import axios from 'axios';

export const BrandApi = async () => {
  try {
    const response = await axios.get('https://cars-nodejs.vercel.app/brands');
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

import axios from 'axios'

const apiUrl = 'https://628e6ce6a339dfef87adf203.mockapi.io/reneeshoes';

const apiServices = {

  getUsers: async () => {
    try {
      const response =await axios.get(apiUrl + '/users');
      return response.data
    } catch (error) {
      console.error(error);
    }
  },

  saveUser: async (user) => {
    try {
      const response = await axios.post(apiUrl + '/users', user);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
}

export default apiServices
import axios from 'axios'

const apiUrl = 'https://628e6ce6a339dfef87adf203.mockapi.io/reneeshoes';

const apiServices = {

  getUsers: async () => {
    const res = await axios.get(apiUrl + '/users');
    return res.data;
  },

  saveUser: async (user) => {
    const res = await axios.post(apiUrl + '/users', user);
    return res.data;
  },
}

export default apiServices
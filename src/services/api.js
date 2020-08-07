import axios from 'axios';

export default {
  getAllProjects() {
    return axios.get('/api/projects')
      .then((res) => res.data);
  },
};

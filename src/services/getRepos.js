import axios from "axios";

const getRepos = query => {
    if (!query) {
      return Promise.resolve([]);
    }
  
    return axios
      .get(
        `https://api.github.com/search/repositories?q=${query}`
      )
      .then(function(response) {
        return response.data.items.map(repos => repos);
      })
      .catch(function(err) {
        console.error(err);
      });
  };
  
  export default getRepos;
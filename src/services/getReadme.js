import axios from "axios";

const getReadme = item => {
    if (!item) {
      return Promise.resolve([]);
    }

    console.log(item, 'item inside')
  
    return axios
      .get(
        `https://raw.githubusercontent.com/${item.owner.login}/${item.name}/${item.default_branch}/README.md`, {
            headers: { 
                "Accept": "application/vnd.github.html"
            }
        }
      )
      .then(function(response) {
        return response.data;
      })
      .catch(function(err) {
        console.error(err);
      });
  };
  
  export default getReadme;
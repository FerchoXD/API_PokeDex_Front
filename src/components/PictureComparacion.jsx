const pokemon = useSelector(state => state.pokemon)
let id = pokemon.id;
var FormData = require('form-data');
var data = new FormData();
data.append('file', archivos[0]);
let token = localStorage.getItem('token')
var config = {
  method: 'put',
  url: 'http://localhost:8080/file/pokemon/' + id,
  headers: { 
    'Authorization': 'Bearer ' + token, 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

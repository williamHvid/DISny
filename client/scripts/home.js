let responseDOM = document.getElementById("response")


function getUsers(){
    axios.get('http://localhost:3000')
    .then(function (response) {
      // handle success
      console.log(response.data);
      responseDOM.innerHTML = response.data
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

function saveUser(){

}
document.getElementById("btn").addEventListener("click", fetchData);
const user = 1;
function fetchData(){
    const url = "https://jsonplaceholder.typicode.com/users";
    const resultDiv = document.getElementById("fetch");
    //limpiar resultado
    resultDiv.textContent = "Cargando Datos...";

    fetch(url)
    .then(response =>{
        if(!response.ok){
            throw new Error(`Error: ${response.status}${response.statusText}`);

        }
        return response.json();//convertir la respuesta a json

    })
    .then(data =>{
        resultDiv.textContent = JSON.stringify(data, user,2);//mostrar nuestros datos

    })
    .catch(error => {
        resultDiv.textContent = `Error:${error.message}`;
    })
}
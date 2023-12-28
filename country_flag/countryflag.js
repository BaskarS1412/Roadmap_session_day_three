

const URL = "https://restcountries.com/v3.1/all";

// Step 1: Create a XML Object.
const xhr = new XMLHttpRequest();

// Step 2: API URL ---> using open method and give two parameters.
xhr.open("GET", URL);

// Step 3: Establishing the bridge.
xhr.send();

// Step 4: Here get responce from server and then iterate the response values
xhr.onload = () => {
    const data = JSON.parse(xhr.response);
    for(let i = 0 ; i< data.length ; i++){
        console.log(data[i].flags);   
}
    }   


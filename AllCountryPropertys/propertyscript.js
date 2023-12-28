

const URL = "https://restcountries.com/v3.1/all";

// Step 1: Here create a XML object using new key word.
const xmlObj = new XMLHttpRequest();

// Step 2: Using open method and add the two method property.
xmlObj.open("GET", URL);

// Step 3: Using send method
xmlObj.send();

// Step 4: using onload method and get response from server, the iterate the response vales.
xmlObj.onload = () =>{
    const resultOfDatas = JSON.parse(xmlObj.response);
    for(let i = 0; i < resultOfDatas.length; i++){
        console.log(resultOfDatas[i].name.common + ", "+ resultOfDatas[i].region + ", "+
                    resultOfDatas[i].subregion + ", " + resultOfDatas[i].population);
    }
    
}


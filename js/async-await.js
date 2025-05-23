const url = 'https://jsonplaceholder.typicode.com/posts';

async function getData() {

    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log("datos recibidos:", data)

    }catch(error){
        console.error("Hay un error, revisar", error);

    }
    
}
getData()
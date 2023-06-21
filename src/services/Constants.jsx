import axios from "axios";


let RANDOM_API_KEY = "sX3CW8Svagrh96ijxstWvyCVK16QCGxa";
let SEARCH_API_KEY = "sX3CW8Svagrh96ijxstWvyCVK16QCGxa"
export async function Constants(){
    const Result = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${RANDOM_API_KEY}&tag=&rating=g`)
    .then(({ data }) => {
        return data;
      });
      return Result;
    
}

export async function Search(){
    const Result = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${SEARCH_API_KEY}q=&limit=25&offset=0&rating=g&lang=en`)
    .then(({ data }) => {
        return data;
      });
      return Result;
    
}


// export const CLIENT_URL="https://api.giphy.com/v1/gifs/random?api_key=sX3CW8Svagrh96ijxstWvyCVK16QCGxa&tag=&rating=g"
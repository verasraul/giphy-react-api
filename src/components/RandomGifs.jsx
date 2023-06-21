import { useState, useEffect } from 'react';
import { Constants } from '../services/Constants';


export default function RandomGif(){
    const [gifs, setGifs] = useState([]);
    const fetchData = async () => {
        try {
          const response = await Constants();
          setGifs(response.data.images.original.url);
          // console.log(setGifs);
        } catch (error) {
          console.log(error);
        }
      }
    console.log(fetchData);
    useEffect(() => {
      fetchData();
    }, [])

    // const handleButton = () => {
    //   if (gifs){
    //     fetchData();
    //   return (
    //   <img src= { gifs }/>
    //   )
    //   }
    // }


    
    return(
          <div>
          <div>
            <input id="search-pane-input" type="text" placeholder="Search for Gifs"/>
            <br></br>
            <button class="search-bt" id="search-pane-button">Search</button>
        </div>
          <img src= { gifs }/>
          <br></br>
          <button onClick= {fetchData}>
            Generate Gif
          </button>
        </div>
    )
}











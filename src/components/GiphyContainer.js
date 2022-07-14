import {useState} from 'react';
import GiphyCount from './GiphyCount';
import GiphyList from './GiphyList';
import {giphyArr} from '../services/Endpoints';

function GiphyContainer() {

  const [giphysToDisplay, setGiphysToDisplay] = useState([]);

  const handleValueChange = async (event) => {
    event.preventDefault();
    const giphysTemp = await giphyArr(event.target.value);
    // console.log(giphysTemp)
    const gifs = giphysTemp.map((gif) => {
      return 'https://media.giphy.com/media/' + gif.id + '/giphy.gif'
    });
    setGiphysToDisplay(gifs);

  }

  return(
    <div>
      <GiphyCount onChange={(e) => handleValueChange(e)} 
      />
      <GiphyList giphys={giphysToDisplay} 
      />

    </div>
  )
}
//all of the data is hoisted to the top of the tree
//and it is passed down to the child components

export default GiphyContainer
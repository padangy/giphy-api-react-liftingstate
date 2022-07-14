import {GiphyFetch} from '@giphy/js-fetch-api';

const KEY = process.env.REACT_APP_GIPHY_API_KEY;

// array of 50 gifs
export async function giphyArr(limit = 50) {
    try {
      const gf = new GiphyFetch(KEY)
      const { data: gifs } = await gf.trending({ limit })
      return gifs;
    }
    catch (err) {
    console.log(err)
    }
}
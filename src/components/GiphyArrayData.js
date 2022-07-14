import {GiphyFetch} from '@giphy/js-fetch-api';

export async function GiphyArrayData() {

  const fetchGiphys = async () => {
    const gf = new GiphyFetch('nHXCnH78r5yHjVgi4XSS0i6C3uQ8Lzlt')
    const { data: gifs } = await gf.trending({ limit: 50 })
    let gifArr = gifs;
  }

  fetchGiphys();

}

export default GiphyArrayData;
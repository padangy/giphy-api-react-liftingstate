function GiphyCount(props) {
  //this function is for user input
  
  return(
    <div>
      <label htmlFor="giphy-count">How many trending Giphys do you want to see?</label>
      <input type="number" min='0' max='10' default='0' onChange={props.onChange} name="giphy-count" />
    </div>
  )
}

export default GiphyCount
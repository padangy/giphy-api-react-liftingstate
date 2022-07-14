function GiphyList(props) {
  
  return(
    <div>
      <ul>
        {props.giphys.map((giphy) => {
          return <li key={giphy}><img src={giphy} alt="gif"/></li>
          }) 
        }
      </ul>
    </div>
  )
}

export default GiphyList
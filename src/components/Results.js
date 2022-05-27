import axios from "axios"
import { useEffect, useState } from "react"
import swAlert from "@sweetalert/with-react"


const Results = () => {

  let query = new URLSearchParams(window.location.search)
  let keyword = query.get('search')

  const [searchMoviesResults, setSearchMoviesResults] = useState([])

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${keyword}`
    axios
      .get(endPoint)
      .then(response => {
        const searchResults = response.data.results
        
        if(searchResults.length === 0) {
          swAlert(<p>There is not results</p>)
        }
        setSearchMoviesResults(searchResults);
      })
      .catch(error => {
        swAlert(<p>{error.message}</p>)
      })
  }, [keyword])

  console.log('>>> searchMoviesResults:', searchMoviesResults)

  // TODO: Search bar is not working in results path, work only if refresh
  return (
    <>
      <h5 className="pt-2">Results for: <em>{keyword}</em></h5>

      {!searchMoviesResults && <h2>Loading...</h2>}

      {searchMoviesResults.length === 0 && <h5>There is not results!</h5>}

      {/* {searchMoviesResults 
        &&  */}
          <div className="row">
            { searchMoviesResults.map((movie, index) => (            
              <div className="col-sm-6 col-md-4 col-lg-3 py-4" key={index}>
                <div className="card">
                  <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title.substring(0, 36)}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
      
    </>
  )
}

export default Results



// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&page=1
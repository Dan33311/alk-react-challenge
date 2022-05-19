import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import swAlert from "@sweetalert/with-react"


const Details = () => {
  const token = sessionStorage.getItem('token')

  let query = new URLSearchParams(window.location.search)
  let movieID = query.get('movieID')

  const [movieDetails, setMovieDetails] = useState(null)

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    axios
      .get(endPoint)
      .then(response => {
        const movieData = response.data
        setMovieDetails(movieData)
      })
      .catch(error => {
        swAlert(<p>{error.message}</p>)
      })
  }, [movieID])



  return (
    <>
      { !token && <Navigate to="/" /> }
      { !movieDetails && <p>Loading...</p> }
      { movieDetails
        &&
          <div className="container mt-5">
            <div className="d-flex flex-direction-row justify-content-center align-items-center">
              {/* TODO: practice bootstrap grid with this structure */}
              <div className="d-flex flex-direction-column justify-content-center align-items-center" style={{width: '500px'}}>
                <img 
                  src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`} 
                  alt="poster_path" 
                  style={{width: '300px', height: 'auto'}}
                  className="img-fluid float-left mw-100 mh-100"
                />
                {/* <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`} alt="poster_path" /> */}
                
                {/* belongs_to_collection is an object and in some movies its value is null */}
                {/* <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.belongs_to_collection?.backdrop_path}`} alt="poster_path" /> */}
                {/* <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.belongs_to_collection?.poster_path}`} alt="poster_path" /> */}
              </div>
              <div className="" style={{width: '400px'}}>
                <h2 className="text-success mt-2">{movieDetails.title.toUpperCase()}</h2>
                <p className="ms-2">{movieDetails.overview}</p>
                <div className="d-flex flex-direction-row align-items-baseline">
                  <h5 className="text-success">Genres:&nbsp;&nbsp;</h5>
                  {movieDetails.genres.map((genre, index) => (
                    <p key={index}>{genre.name}&nbsp;&nbsp;</p>
                  ))}
                </div>
                <div className="d-flex flex-direction-row align-items-baseline">
                  <h5 className="text-success">Average:&nbsp;&nbsp;</h5>
                  <p>{movieDetails.vote_average}/10</p>
                </div>
                <div className="d-flex flex-direction-row align-items-baseline">
                  <h5 className="text-success">Language:&nbsp;&nbsp;</h5>
                  {movieDetails.spoken_languages.map((language, index) => (
                    <p key={index}>{language.english_name}&nbsp;&nbsp;</p>
                  ))}
                </div>
                <div className="d-flex flex-direction-row align-items-baseline">
                  <h5 className="text-success">Release Date:&nbsp;&nbsp;</h5>
                  <p>{movieDetails.release_date}</p>
                </div>
                <div className="d-flex flex-direction-row align-items-baseline">
                  <h5 className="text-success">Runtime:&nbsp;&nbsp;</h5>
                  <p>{movieDetails.runtime} minutes</p> 
                </div>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default Details



// API DOCUMENTATION
// https://developers.themoviedb.org/3/movies/get-movie-details

// Testing the URL
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
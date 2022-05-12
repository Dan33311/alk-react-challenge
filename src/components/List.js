import { useEffect, useState } from 'react'
import { useNavigate, Navigate, Link } from 'react-router-dom'
import axios from 'axios'
import swAlert from '@sweetalert/with-react'


const List = () => {
  const navigate = useNavigate()
  let token = sessionStorage.getItem('token')
  const apiKey = process.env.REACT_APP_API_KEY

  const [moviesList, setMoviesList] = useState([])

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US`
    axios
      .get(endPoint)
      .then(response => {
        const apiData = response.data.results
        setMoviesList(apiData)
      })
      .catch(error => {
        swAlert(<p>{error.message}</p>)
      })
  }, [setMoviesList])


  return (
    <>
      { !token 
        ? 
          <Navigate to="/" />
        : 
        <div className="row">
          { moviesList.map((movie, index) => (            
            <div className="col-sm-6 col-md-4 col-lg-3 py-4" key={index}>
              <div className="card">
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <div className="card-body">
                  <h5 className="card-title">{movie.title.substring(0, 36)}</h5>
                  <p className="card-text">{movie.overview.substring(0, 80)}</p>
                  {/* <button onClick={() => navigate('/details')} className="btn btn-primary">Details</button> */}
                  <Link to={`/details?movieID=${movie.id}`} className="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
          
      }
    </>
  );
}

export default List
import { Navigate } from "react-router-dom"

const Details = () => {
  const token = sessionStorage.getItem('token')

  let query = new URLSearchParams(window.location.search)
  let movieID = query.get('movieID')

  console.log(movieID);


  return (
    <>
      { !token 
        ? 
          <Navigate to="/" />
        : 
          <div className="row">
            <div className="col-6">
              <h2>Title:</h2>
              <img src="" alt="poster_path" />
              <h5>genres</h5>
              <ul>
                <li>genre 1</li>
                <li>genre 2</li>
                <li>genre 3</li>
              </ul>
              <h5>vote_average</h5>
              <h5>release_date</h5>
              <h5>overview</h5>
            </div>
          </div>
      }
    </>
  )
}

export default Details


// DOCUMENTATION
// https://developers.themoviedb.org/3/movies/get-movie-details

// Testing the URL
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
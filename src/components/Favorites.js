import { Navigate } from "react-router-dom"

const Favorites = (props) => {
  const token = sessionStorage.getItem('token')

  
  return (
    <>
      {!token && <Navigate to="/" />}
      <h5 className="mt-4 ms-4">Favorites section</h5>
      {!props.favorites.length && <p className="mt-4 ms-4 text-danger">There is not movies added !</p>}
      <div className="row">
          { props.favorites.map((movie, index) => (            
            <div className="col-sm-6 col-md-4 col-lg-3 py-4" key={index}>
              <div className="card">
                <img className="card-img-top" src={movie.imgURL} alt={movie.title} />
                <div className="card-body">
                  <h5 className="card-title">{movie.title.substring(0, 36)}</h5>
                  <p className="card-text">{movie.overview.substring(0, 80)}</p>
                  <button 
                    onClick={props.addOrRemoveFromFavs} 
                    className="btn btn-primary ms-2"
                    data-movie-id={movie.id}
                  >🤍</button>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default Favorites
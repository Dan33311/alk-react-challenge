import { useState, useEffect } from "react"


const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const favsInLocalStorage = localStorage.getItem('favs')
    if (favsInLocalStorage !== null) {
      const favsArray = JSON.parse(favsInLocalStorage)
      setFavorites(favsArray)
      console.log("favsArray:", favsArray);
    }
  }, [])

  return (
    <>
      <h5 className="mt-4 ms-4">Favorites section</h5>
      <div className="row">
          { favorites.map((movie, index) => (            
            <div className="col-sm-6 col-md-4 col-lg-3 py-4" key={index}>
              <div className="card">
                <img className="card-img-top" src={movie.imgURL} alt={movie.title} />
                <div className="card-body">
                  <h5 className="card-title">{movie.title.substring(0, 36)}</h5>
                  <p className="card-text">{movie.overview.substring(0, 80)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default Favorites
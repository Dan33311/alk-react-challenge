// libraries
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

// components
import Login from "./components/Login"
import List from "./components/List"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Details from "./components/Details"
import Results from "./components/Results"
import Favorites from "./components/Favorites"

// styles
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


function App() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const favsInLocalStorage = localStorage.getItem('favs')
    if (favsInLocalStorage !== null) {
      const favsArray = JSON.parse(favsInLocalStorage)
      setFavorites(favsArray)
    }
  }, [])

  const addOrRemoveFromFavs = (e) => {
    const favMovies = localStorage.getItem('favs')

    let tempMoviesInFavs

    if (favMovies === null) {
      tempMoviesInFavs = []
    } else {
      tempMoviesInFavs = JSON.parse(favMovies)
      console.log('there is movies in favs')
    }

    const btn = e.currentTarget
    const parent = btn.parentElement
    const grandParent = parent.parentElement
    const imgURL = grandParent.querySelector('img').getAttribute('src')
    const title = parent.querySelector('h5').innerText
    const overview = parent.querySelector('p').innerText
    // console.log("btn.dataset:", btn.dataset)
    const movieData = {
      title,
      imgURL,
      overview,
      id: btn.dataset.movieId
    }

    let movieIsInArray = tempMoviesInFavs.find(movie => movie.id === movieData.id)

    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData)
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs))
      setFavorites(tempMoviesInFavs)
      console.log("movie added to favorites")
    } else {
      // if the movie selected in arr -> remove and return the rest of movies
      let moviesLeft = tempMoviesInFavs.filter(movie => movie.id !== movieData.id)
      // store the rest (moviesLeft) in localStorage
      localStorage.setItem('favs', JSON.stringify(moviesLeft))
      setFavorites(moviesLeft)
      console.log('movie removed from favorites')
    }
  }


  return (
    
    <div className="App">
      <Header />

      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
          <Route path="/details" element={<Details />} />
          <Route path="/results" element={<Results />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} addOrRemoveFromFavs={addOrRemoveFromFavs}/>} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App

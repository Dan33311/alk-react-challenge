// libraries
import { Routes, Route } from "react-router-dom"

// components
import Login from "./components/Login"
import List from "./components/List"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Details from "./components/Details"
import Results from "./components/Results"

// styles
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


function App() {
  const addOrRemoveFromFavs = (e) => {
    const favMovies = localStorage.getItem('favs')

    let tempMoviesInFavs

    if (favMovies === null) {
      tempMoviesInFavs = []
    } else {
      tempMoviesInFavs = JSON.parse(favMovies)
      console.log('there is movies in favs');
    }

    const btn = e.currentTarget
    const parent = btn.parentElement
    const grandParent = parent.parentElement
    const imgURL = grandParent.querySelector('img').getAttribute('src')
    const title = parent.querySelector('h5').innerText
    const overview = parent.querySelector('p').innerText
    console.log("btn.dataset:", btn.dataset);
    const movieData = {
      title,
      imgURL,
      overview,
      id: btn.dataset.movieId
    }

    let movieIsInArray = tempMoviesInFavs.find(movie => movie.id === movieData.id)
    console.log("movieIsInArray:", movieIsInArray);

    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData)
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs))
      console.log("movie added to favorites");
    } else {
      // if the movie selected in arr -> remove and return the rest of movies
      let moviesLeft = tempMoviesInFavs.filter(movie => movie.id !== movieData.id)
      // store the rest (moviesLeft) in localStorage
      localStorage.setItem('favs', JSON.stringify(moviesLeft))
      console.log('movie removed from favorites');
    }
    // console.log("movieData:", movieData);
    // console.log("tempMoviesInFavs:", tempMoviesInFavs);
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
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App

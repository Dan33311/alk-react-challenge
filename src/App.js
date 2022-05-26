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
    const btn = e.currentTarget
    const parent = btn.parentElement
    const grandParent = parent.parentElement
    const imgURL = grandParent.querySelector('img').getAttribute('src')
    const title = parent.querySelector('h5').innerText
    const overview = parent.querySelector('p').innerText
    console.log("btn.dataset:", btn.dataset);
    const movieData = {
      imgURL,
      title,
      overview,
    }
    // console.log("addOrRemoveFromFavs function working");
    // console.log("btn", btn);
    // console.log("parent", parent);
    // console.log('imgURL:', imgURL);
    // console.log('title:', title);
    // console.log('overview:', overview);
    console.log("movieData:", movieData);
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

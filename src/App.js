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
  return (
    
    <div className="App">

      <Header />

      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="/details" element={<Details />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>

      <Footer />

    </div>
  )
}

export default App

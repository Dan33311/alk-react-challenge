// libraries
import { Routes, Route } from 'react-router-dom'

// components
import Login from "./components/Login";
import List from "./components/List";
import Header from './components/Header';
import Footer from './components/Footer';

// styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    
    <div className="App">

      <Header />

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;

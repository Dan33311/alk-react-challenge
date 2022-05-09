import { Routes, Route } from 'react-router-dom'
import Login from "./components/Login";
import List from "./components/List";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="App">

      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
      </Routes>

      <Footer />
      
    </div>
  );
}

export default App;

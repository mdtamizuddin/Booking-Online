
import './App.css';
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Notfound from './Component/NotFound/Notfound';
function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='*' element={<Notfound />}/>
          <Route path='/' element={<Navigate to={'/home' } />}/>
          <Route path="/home" element={<Home />}/>          
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

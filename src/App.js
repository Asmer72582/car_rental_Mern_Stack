import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
import CarDetails from './Pages/CarDetails/CarDetails';
import Profile from './Pages/Profile/Profile';
import Search from './Pages/Search/Search';
import Test from './Pages/Test/test';
import CarCard from './Components/CarCard';
import CarDetail from './Pages/Test/CarDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cardetail' element={<CarDetails />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/search' element={<Search />} />
          <Route path='/test' element={<CarDetail />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

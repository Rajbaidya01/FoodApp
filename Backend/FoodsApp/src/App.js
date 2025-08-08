import './App.css';
// import "bootstrap/dist/css/bootstrap.css"; // remove if fully Tailwind
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Food from './components/Food';
import AddFood from './components/AddFood';
import DeleteFood from './components/DeleteFood';
import SearchFood from './components/SearchFood';
import UpdateFood from './components/UpdateFood';
import FoodList from './components/FoodList';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NavClient from './components/NavClient';
import AddOrder from './components/AddOrder';
import Billing from './components/Billing';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/navClient" element={<NavClient />} />
        <Route path="/addOrder" element={<AddOrder />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/flist" element={<FoodList />} />
        <Route path="/sfood" element={<SearchFood />} />
        <Route path="/food" element={<Food />}>
          <Route path="fadd" element={<AddFood />} />
          <Route path="fdelete" element={<DeleteFood />} />
          <Route path="fupdate" element={<UpdateFood />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

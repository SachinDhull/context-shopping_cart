import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './components/Cart';
import Home from './components/Home';



function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="App">
      <Routes>
      <Route path='/' element={<Home /> }>
      </Route>
      <Route path='/cart' element={<CartPage />} >
       </Route>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;

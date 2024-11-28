
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import SignIn from './Components/SignIn';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {

    return (
      <BrowserRouter>
        <Routes> 
           <Route path="/" element={<SignIn />} />
           <Route path="/signup" element={<Signup/>} />
           <Route path='/home' element= {<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    );
}

export default App

import logo from './logo.svg';
import './App.css';
import Addemployee from './components/Addemployee';
import Searchemployee from './components/Searchemployee';
import Deleteemployee from './components/Deleteemployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>

   <Route path='/' element={<Addemployee/>}/>
   <Route path='/search' element={<Searchemployee/>}/>
   <Route path='/delete' element={<Deleteemployee/>}/>

    </Routes>
    
    
    
    </BrowserRouter>
    
  
    
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Viewbooks from './components/Viewbooks';
import Addbooks from './components/Addbooks';
import Home from './components/Home';
import NoMatchRoute from './components/NoMatchRoute';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
    
        <Route path='/' element={<Home/>}/>
        <Route path='/view' element={ <Viewbooks/> }/>
        <Route path='/add' element={<Addbooks data={{bookname:'',author:'',language:'',genre:'',booknum:''}} method='post'/>}/>
        <Route path='*' element={<NoMatchRoute/>}/>

      </Routes>
      {/* <Viewbooks/> */}
    
    </div>
  );
}

export default App;

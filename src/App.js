import logo from './logo.svg';
import './App.css';
import Services from './reactrouter/Services';
import About from './reactrouter/About';
// import Home from './reactrouter/Home'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import HomeTwo from './reactrouter/HomeTwo';

function App() {
  return (
    <div>
        <BrowserRouter>
        <ul>
          {/* <li><a href='/home'>Home</a></li>
          <li><a href='/About'>About</a></li>
          <li><a href='/Services'>Services</a></li> */}
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/Services'>Services</Link></li>
        </ul>

          <Routes>
            <Route path='/home' element={<HomeTwo/>}/>
            <Route path='/About/:message' element={<About/>}/>
            <Route path='/Services' element={<Services/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

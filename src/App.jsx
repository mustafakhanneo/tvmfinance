
import { Route, Routes } from 'react-router-dom';
import Home from './tabs/Home'
import Formula from './tabs/Formula';
import NotFound from './tabs/NotFound';
import About from './tabs/About';

function App() {


  return (
    <div className='space-y-6 p-[1rem] m-auto max-w-[1280px]'>
    <div className="navbar items-center justify-center rounded-lg bg-base-200">
      
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href='./formula'>Formulas</a></li>
        <li><a href='./about'>About</a></li>
      </ul>
    </div>
  </div>


  <div className="navbar-center">
    <a className="btn btn-ghost font-kola sm:text-2xl text-sm" href='./'>TVM Finance: Time Value of Money</a>
  </div>
  

  <div className="navbar-end">
    
  </div>


</div>
<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formula" element={<Formula/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
     
    </div>
  )
}

export default App

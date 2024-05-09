
import { Route, Routes } from 'react-router-dom';
import Home from './tabs/Home'
import Formula from './tabs/Formula';
import NotFound from './tabs/NotFound';

function App() {


  return (
    <div className='space-y-16 p-[1rem] m-auto max-w-[1280px]'>
    <div className="navbar items-center justify-center rounded-lg bg-base-200">
  <div className="navbar-center">
    <a className="btn btn-ghost font-kola text-xl" href='./'>Corporate Finance: Time Value of Money</a>
  </div>
  
</div>
<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formula" element={<Formula/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
     
    </div>
  )
}

export default App

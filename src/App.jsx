import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import Search from './Components/Search/Search';
import Detail from './Components/Detail/Detail';

function App() {
  
  function requireAuth(nextState, replace, next) {
    const authenticated = localStorage.getItem('user');
    if (!authenticated) {
      replace({
        pathname: "/",
        state: { nextPathname: nextState.location.pathname }
      });
    }
    next();
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/book/:id' onEnter={requireAuth} element={<Detail/>} />
        <Route path='/search' onEnter={requireAuth} element={<Search/>} />
        <Route path='/' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

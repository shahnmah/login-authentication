import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login'
import Header from './Pages/Shared/Header/Header';
import SignUp from './Pages/SignUp/SignUp';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;

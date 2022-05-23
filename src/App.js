import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Login from './component/auth/Login';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Forgot from './component/auth/Forgot';
import ResetPassword from './component/auth/ResetPassword';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/forgot" element={<Forgot/>}/>
          <Route path="/reset" element={<ResetPassword/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

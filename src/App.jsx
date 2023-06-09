import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./components/common/Navbar";
import Menu from "./components/common/menu";
import Home from './components/common/home';


//import './App.css' 316 478 21 73

function App() {
  return (
    
    <Router>
      <Navbar/>
      {/* <Carrusel/> */}
      <Routes>
        
        <Route path="/" exact Component={Home} />
        <Route path="/Menu" Component={Menu} />
        <Route path="/datos"  Component={Menu} />
      </Routes>
      
      {/* <Contain />
    <Footer/> */}
    </Router>
    
  );
}

export default App;

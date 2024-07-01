import "./App.css";
import Footer from "./components/public/Footer";
import Main from "./components/public/Main";
import {  Route, Routes, useLocation } from "react-router-dom";



import Navbar from "./components/public/Navbar";
import Detail from "./components/public/Detail";
import UserForm from "./components/public/UserForm";

import Navbar2 from "./components/public/Navbar2";



function App() {
  
  
  const location = useLocation();


  return (
    <div>
       { location.pathname == "/user-form" ? <Navbar2/> : null
       }
       { location.pathname.includes("/detail/") ? <Navbar2/> : null
       }
      
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route  path="/detail/:id" element={<Detail />} />
          <Route exact path="/user-form" element={<UserForm />} />
        </Routes>
      

      <Footer />
    </div>
  );
}

export default App;

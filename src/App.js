import React ,{useState} from "react";
import Header from "./Header";
import './App.css'
import Footer from "./Footer";
import Main from "./main"

// import Aside from "./Aside"



function App() {
 const [cart, setCart] = useState(1) 
 
  return (
    <div>
    <Header cart= {cart} />
    
    <Main setCart = {setCart} />

   
    <Footer />

    </div>
  
  
  );
}

export default App;
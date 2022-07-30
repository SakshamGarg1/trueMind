import React from "react";
import data from './data.json';



const Main = ({setCart,cart}) =>{

  
const addToCart=(val)=>{
    console.log(cart)
    let temp =cart;
    console.log(temp)

    temp.push(val);
    setCart(temp);
}
    

    return (
        <>
        { data.map((val,i)=>
            <div className = "Policy-box" key={i} >
        
            <h2 className="myfont">{val.name}</h2> 
            
        
        <div className="properties" >
        
        <div className="details">
            <p>{val.nature}&nbsp;&nbsp;.</p>
            <p>{val.rtaCode}&nbsp;&nbsp;.</p>
            <p>{val.riskmeter}</p>
        </div>
    <button className="learn-more buttton" onClick={()=>addToCart(val)}>
        <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
        </span>
        <span className="buttton-text">Invest Now</span>
    </button> 

        </div>
        </div>
        ) }
       

        </>
    )
}


export default Main;

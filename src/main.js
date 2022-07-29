import React, { useEffect } from "react";
import data from './data.json';



const Main = ({setCart}) =>{

  

    

    return (
        <>
        { data.map((val,i)=>
        <div className = "Policy-box" >
        <div> 
            <h3>{val.name}</h3> 
        </div> 
        <button onClick={()=>{setCart(4)}} className="btn">Invest Now</button>
        <div className="properties" >

            <p>{val.nature}</p>
            <p>{val.rtaCode}</p>
            <p>{val.riskmeter}</p>

        </div>
        </div>
        ) }
       

        </>
    )
}


export default Main;

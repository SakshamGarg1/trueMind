import { useEffect, useState } from 'react';
import './App.css';
// import Cart from './cart';

function Header({cart,setCart }){
    const [cartvalue, setCartvalue] = useState(true)
const removeItem=(i)=>{
 let temp= [...cart];
temp.splice(i,1);
setCart(temp)

}
    return(
        <>
        <header>
            <h1 className='myfont ms-2'>
                TURE MIND <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/>
</svg>      
            </h1>
            <div className="cart" onClick={()=>setCartvalue(!cartvalue)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-cart2" viewBox="0 0 16 16" >
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
<span>{cart.length}</span>


        </div>
        </header>
        {cartvalue&&
            <div className="box arrow-top">
        {cart.map((val,i)=>
           <form className='cartitem'>
            <p className='closebtn'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16" onClick={()=>removeItem(i)}>
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg></p>
            <div className='cartitemheading'> 
            
                <h3>{val.name}</h3>
                <h6>Min. Amount : ₹{val.minimumPurchaseAmount}</h6>
                </div>
                <h6>{val.category} . {val.classification}</h6>
                <h3>Amount</h3>
                <input type='number' min={parseInt(val.minimumPurchaseAmount)} className="myinput"/>
                <p className='err'>Min. Amount : ₹{val.minimumPurchaseAmount}</p>
                <button type='submit' className='mybtn'>Invest Now</button>
        
           </form>
           )}
        </div>}
        </>
    );
}
export default Header;
import './App.css';
import Cart from './cart';

function Header({cart}){
    return(
        <header>
            <h1>
                Mutual Funds {cart}       
            </h1>
            <Cart/>
        </header>
    );
}
export default Header;
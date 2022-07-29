import React ,{useState} from "react";
import Header from "./Header";
import './App.css'
import Footer from "./Footer";
import Main from "./main";
// import Aside from "./Aside"



function App() {
 const [cart, setCart] = useState([{
  "id": "YLGD",
  "name": "WhiteOak Capital Liquid Fund",
  "code": "LGD",
  "nav": "1160.05 (25-Jul-2022)",
  "rtaCode": "YLGD",
  "rtaName": "CAMS",
  "minimumInvestment": 500,
  "benchmark": "CRISIL Liquid Fund Index",
  "expenseRatio": "0.24",
  "exitLoad": "If redeemed bet. 7 Days to 7 Days;  Exit Load is Nil; If redeemed bet. 6 Days to 6 Days;  Exit Load is 0.0045%; If redeemed bet. 5 Days to 5 Days;  Exit Load is 0.005%; If redeemed bet. 4 Days to 4 Days;  Exit Load is 0.0055%; If redeemed bet. 3 Days to 3 Days;  Exit Load is 0.006%; If redeemed bet. 2 Days to 2 Days;  Exit Load is 0.0065%; If redeemed bet. 1 Day to 1 Day;  Exit Load is 0.007%; ",
  "objective": "The investment objective of the Scheme is to generate optimal returns consistent with moderate levels of risk and high liquidity by investing in high quality debt and money market instruments.However, there is no assurance or guarantee that the investment objective of the Scheme will be achieved.The Scheme does not assure or guarantee any returns.",
  "aum": 60.8698,
  "amc": "WhiteOak Capital Mutual Fund",
  "nature": "Debt",
  "fundManager": "Piyush Baranwal",
  "classification": "Liquid Fund",
  "category": "DEBT",
  "riskmeter": "Low Riskometer",
  "maximumPurchaseAmount": "100000.000",
  "minimumPurchaseAmount": "500.000",
  "purchaseAmountMultiplier": "1.000"
  
}]) 
 
 
  return (
    <div>
    <Header cart= {cart} setCart = {setCart}  />
   <Main setCart = {setCart} cart={cart} />
    <Footer />

    </div>
  
  
  );
}

export default App;
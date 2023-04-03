import { Fragment,useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown,setcartIsShown]=useState(false);

  const showCartHandler=()=>{
    setcartIsShown(true);
  }
  const hideCartHandler=()=>{
    setcartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
       <Meals/>
      </main>
    </Fragment>
  );
} 

export default App;

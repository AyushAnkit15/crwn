 import "./categories-styles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Signin_component from "./routes/sign-in/sign-in.component";
import CheckOut from "./routes/checkout/checkout.component";

 


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index  element={<Home />}/>
          <Route path="shop/*" element = {<Shop/>} />
          <Route path="sign-in" element={<Signin_component/>} />
          <Route path = 'checkout' element={<CheckOut/>}/>
      
      </Route>
    </Routes>
  );
}

export default App;

 import "./categories-styles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

import Signin_component from "./routes/sign-in/sign-in.component";

 
const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index  element={<Home />}/>
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<Signin_component/>} />
      
      </Route>
    </Routes>
  );
}

export default App;

import "./categories-styles.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Signin_component from "./routes/sign-in/sign-in.component";
import CheckOut from "./routes/checkout/checkout.component";
import setCurrentUser from "./store/user/user.action";

function App() {
  const dispatch = useDispatch();
  // console.log(dispatch)

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        // console.log(user);
        await createUserDocumentFromAuth(user);
      }

      // console.log(setCurrentUser(user).type);

      const type = setCurrentUser(user).type

      // console.log(type)

      // console.log( dispatch({type:type}));
      // dispatch({type:type , payload:user});
      dispatch({...setCurrentUser(user)})

      console.log(user);
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="sign-in" element={<Signin_component />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
}

export default App;

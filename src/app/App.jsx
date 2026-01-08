// Routing
import RouterLogin from "../router/routerLogin/routerLogin";
import RouterMain from "../router/routerMain/RouterMain";

// store
import { useSelector } from "react-redux";

// modules 
import { BrowserRouter } from "react-router-dom";


function App() {
    const isAuth = useSelector(state => state.auth.isAuth); 

  return(
    <>
      <BrowserRouter>
          {(isAuth) ? <RouterMain /> : <RouterLogin />}
      </BrowserRouter>
    </>
  )
}





export default App;

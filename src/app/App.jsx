// Routing
import RouterLogin from "../router/routerLogin/routerLogin";
import RouterMain from "../router/routerMain/RouterMain";

// store
import { useSelector } from "react-redux";


function App() {
    const isAuth = useSelector(state => state.auth.isAuth); 

  return(
    <>
      {(isAuth) ? <RouterMain /> : <RouterLogin />}
    </>
  )
}





export default App;

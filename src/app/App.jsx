import AppLayout from "../components/layout/AppLayout";
import LayoutLogin from "../components/layout/LayoutLogin";
import MainPages from "../pages/mainPages/MainPages";

import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <>
      <BrowserRouter>
        {isAuth ? (
          <AppLayout>
            <Routes>
              <Route path="/" element={<MainPages />} />
            </Routes>
          </AppLayout>
        ) : (
          <LayoutLogin />
        )}
      </BrowserRouter>
    </>
  );
}

export default App;

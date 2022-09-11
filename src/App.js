import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import LayoutPage from "./layouts/LayoutPage";
function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route element={<LayoutPage></LayoutPage>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
          </Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          {/* <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route> */}
          <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;

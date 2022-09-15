import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import LayoutPage from "./layouts/LayoutPage";
import PostDetailPage from "./pages/PostDetailPage";
import ScrollTop from "./modules/ScrollTop";
function App() {
  return (
    <ScrollTop>
      <AuthProvider>
        <Routes>
          <Route element={<LayoutPage></LayoutPage>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/blog/:id" element={<PostDetailPage></PostDetailPage>}></Route>
          </Route>
          {/* <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route> */}
          <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </AuthProvider>
    </ScrollTop>
  );
}

export default App;

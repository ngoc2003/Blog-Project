import { Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/auth-context";
import ContactPage from "./pages/ConactPage";
import NotFound from "./pages/NotFound";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import LayoutPage from "./layouts/LayoutPage";
import PostDetailPage from "./pages/PostDetailPage";
import ScrollTop from "./modules/ScrollTop";
import AdminLayoutPage from "./layouts/AdminLayoutPage";
import AdminPage from "./pages/admin/AdminPage";
import AdminBlogPage from "./pages/admin/AdminBlogPage";
import CategorizePage from "./pages/CategorizePage";
import Loading from "./components/loading/Loading";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <ScrollTop>
      <Loading>
        <AuthProvider>
          <Routes>
            <Route element={<LayoutPage></LayoutPage>}>
              <Route path="/" element={<BlogPage></BlogPage>}></Route>
              <Route
                path="/about"
                element={<ContactPage></ContactPage>}
              ></Route>
              <Route
                path="/:id"
                element={<PostDetailPage></PostDetailPage>}
              ></Route>
              <Route
                path="/categorize/:categorizeName"
                element={<CategorizePage></CategorizePage>}
              ></Route>
            </Route>
            <Route element={<AdminLayoutPage></AdminLayoutPage>}>
              <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
              <Route
                path="/admin/blog"
                element={<AdminBlogPage></AdminBlogPage>}
              ></Route>
              <Route
                path="/admin/contact"
                element={<AdminPage></AdminPage>}
              ></Route>
            </Route>
            {/* <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route> */}
            <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </AuthProvider>
      </Loading>
    </ScrollTop>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
import SignUpPage from "./pages/SignUpPage";
function App() {
  return (
    // const {us}
    <>
      <AuthProvider>
        <Routes>
          <Route path='/sign-up' element={<SignUpPage></SignUpPage>}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;

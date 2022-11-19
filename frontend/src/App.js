import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/layout";
import Signin from "./Components/Signin/signin";
import SignUp from "./Components/Signup/signup";
import SignInNew from "./Components/SignInNew/signinnew";
import NotFound from "./Components/notfound";
import ProtectedRoute from "./Components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignInNew />} />
          <Route
            path="/layout"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

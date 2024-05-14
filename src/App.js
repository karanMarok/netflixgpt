import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/appStore";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

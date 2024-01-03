// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Internship from "./pages/Internship";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import IDetail from "./pages/IDetail";
import Payment from "./pages/Payment";
import Applied from "./pages/Applied";
import NoPage from "./pages/NoPage";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import Admin from "./pages/Admin";
import ViewApplication from "./pages/ViewApplications";
import ViewInternshipDetails from "./pages/ViewInternshipDetails";
import UpdateInternshipDetails from "./pages/UpdateInternshipDetails";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { loadUserSuccess } from "./Actions/userActions";
import ChangePassword from "./pages/ChangePassword";
// import { useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.user);
  const { isAdmin } = useSelector((state) => state.user);

  const loadUser = async (accessToken) => {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      };
      const res = await axios.get('http://localhost:8000/profile/', config);
      //  console.log(res.data)
      const email = res.data.email;
      const id = res.data.id;
      const isAdmin = res.data.is_admin;
      dispatch(loadUserSuccess({ email, id, isAdmin }))
    }
    catch (e) {

    }
  }

  const accessToken = window.sessionStorage.getItem('accessToken');
  if (accessToken) {
    loadUser(accessToken);
  }

  // const user = useSelector(state => { return state.user });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Landing />} />
        <Route path="/register" element={!isAuthenticated ? <Register /> : <Landing />} />
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/details/:id" element={isAuthenticated ? <IDetail /> : <Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/applied" element={isAuthenticated ? <Applied /> : <Login />} />
        <Route path="/changePassword" element={isAuthenticated ? <ChangePassword /> : <Login />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/admin" element={isAdmin ? <Admin /> : <p>current user is not admin</p>} />
        <Route path="/applications" element={isAdmin ? <ViewApplication /> : <p>current user is not admin</p>} />
        <Route path="/internshipDetails" element={isAdmin ? <ViewInternshipDetails /> : <p>current user is not admin</p>} />
        <Route path="/updateDetails/:id" element={isAdmin ? <UpdateInternshipDetails /> : <p>current user is not admin</p>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
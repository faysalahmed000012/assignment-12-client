import { Route, Routes } from "react-router-dom";
import Blogs from "./Components/Pages/Blogs/Blogs";
import AddReview from "./Components/Pages/Dashboard/AddReview";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import MyItems from "./Components/Pages/Dashboard/MyItems";
import Orders from "./Components/Pages/Dashboard/Orders";
import Users from "./Components/Pages/Dashboard/Users";
import Home from "./Components/Pages/Home/Home";
import Purchase from "./Components/Pages/Home/Purchase";
import Login from "./Components/Pages/Login/Login";
import MyPortfolio from "./Components/Pages/MyPortfolio/MyPortfolio";
import MyProfile from "./Components/Pages/MyProfile/MyProfile";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Signup from "./Components/Pages/Signup/Signup";
import Header from "./Components/Shared/Header/Header";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/myProfile"
          element={
            <RequireAuth>
              <MyProfile></MyProfile>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyItems></MyItems>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="orders" element={<Orders></Orders>}></Route>
        </Route>
        <Route
          path="/product/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/myPortfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

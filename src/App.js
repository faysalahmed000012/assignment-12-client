import { Route, Routes } from "react-router-dom";
import Blogs from "./Components/Pages/Blogs/Blogs";
import AddProduct from "./Components/Pages/Dashboard/AddProduct";
import AddReview from "./Components/Pages/Dashboard/AddReview";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import EditProfile from "./Components/Pages/Dashboard/EditProfile";
import ManageProducts from "./Components/Pages/Dashboard/ManageProducts";
import MyOrders from "./Components/Pages/Dashboard/MyOrders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MyProfile from "./Components/Pages/Dashboard/MyProfile";
import Orders from "./Components/Pages/Dashboard/Orders";
import Users from "./Components/Pages/Dashboard/Users";
import Home from "./Components/Pages/Home/Home";
import Purchase from "./Components/Pages/Home/Purchase";
import Login from "./Components/Pages/Login/Login";
import MyPortfolio from "./Components/Pages/MyPortfolio/MyPortfolio";

import NotFound from "./Components/Pages/NotFound/NotFound";
import Signup from "./Components/Pages/Signup/Signup";
import Header from "./Components/Shared/Header/Header";
import RequireAdmin from "./RequireAuth/RequireAdmin";
import RequireAuth from "./RequireAuth/RequireAuth";
import RequireUserOnly from "./RequireAuth/RequireUserOnly";
import Payment from "./Components/Pages/Dashboard/Payment";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="edit" element={<EditProfile></EditProfile>}></Route>
          <Route
            path="myOrders"
            element={
              <RequireUserOnly>
                <MyOrders></MyOrders>
              </RequireUserOnly>
            }
          ></Route>
          <Route
            path="payment/:id"
            element={
              <RequireUserOnly>
                <Payment></Payment>
              </RequireUserOnly>
            }
          ></Route>
          <Route
            path="review"
            element={
              <RequireUserOnly>
                <AddReview></AddReview>
              </RequireUserOnly>
            }
          ></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="orders"
            element={
              <RequireAdmin>
                <Orders></Orders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="add"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manage"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
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
      <ToastContainer />
    </div>
  );
}

export default App;

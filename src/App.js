import { Route, Routes } from "react-router-dom";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import MyPortfolio from "./Components/Pages/MyPortfolio/MyPortfolio";
import MyProfile from "./Components/Pages/MyProfile/MyProfile";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Signup from "./Components/Pages/Signup/Signup";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/myProfile" element={<MyProfile></MyProfile>}></Route>
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

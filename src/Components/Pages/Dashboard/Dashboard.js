import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.config";
import useAdmin from "../../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          {/* <!-- Page content here --> */}
          <h3 className="text-secondary text-3xl font-sans font-semibold">
            Dashboard
          </h3>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="dashboard-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content gap-y-2">
            {/* <!-- Sidebar content here --> */}
            {!admin && (
              <>
                <li>
                  <Link to="/dashboard">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/review">Add A Review</Link>
                </li>
              </>
            )}
            {admin && (
              <>
                <li>
                  <Link to="/dashboard/users">Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/orders">Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/manage">Manage Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/add">Add A Product</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

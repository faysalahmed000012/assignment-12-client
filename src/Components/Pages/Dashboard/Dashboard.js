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
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <h3 className="text-secondary text-3xl font-sans font-semibold">
            Dashboard
          </h3>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content gap-y-2">
            {/* <!-- Sidebar content here --> */}

            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            {!admin && (
              <>
                <li>
                  <Link to="/dashboard/myOrders">My Orders</Link>
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

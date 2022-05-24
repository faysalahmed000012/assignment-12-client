import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
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
            <li>
              <Link to="/dashboard">My Items</Link>
            </li>
            <li>
              <Link to="/dashboard/review">Add A Review</Link>
            </li>
            <li>
              <Link to="/dashboard/users">Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

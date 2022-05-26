import React from "react";
import {
  UserGroupIcon,
  CashIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/solid";

const BusinessSummery = () => {
  return (
    <div className="mt-6">
      <h3 className="text-center text-4xl text-accent font-semibold mb-7">
        Our Business Reputation
      </h3>
      <div className="flex items-center justify-center my-7">
        <div className="stats stats-vertical lg:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <CashIcon className="w-10"></CashIcon>
            </div>
            <div className="stat-value text-primary">256K</div>
            <div className="stat-title">Last Week Sells</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <UserGroupIcon className="w-10"></UserGroupIcon>
            </div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-title">Happy Clients</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-primary">
              <UsersIcon className="w-10"></UsersIcon>
            </div>
            <div className="stat-value text-primary">2.6k</div>
            <div className="stat-title">Loyal Customers</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <SparklesIcon className="w-10"></SparklesIcon>
            </div>
            <div className="stat-value text-secondary">200+</div>
            <div className="stat-title">Business Awards</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;

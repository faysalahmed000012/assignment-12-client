import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className=" bg-base-200 mt-6">
      <footer class="footer p-10 text-base-content">
        <div>
          <p className="text-4xl text-primary font-sans font-bold">
            ElectroFirm Ltd.
          </p>
          <p className="text-2xl font-semibold">
            {" "}
            Providing reliable products since 1992
          </p>
        </div>
        <div>
          <span class="footer-title">Services</span>
          <Link to="#" class="link link-hover">
            Branding
          </Link>
          <Link to="#" class="link link-hover">
            Design
          </Link>
          <Link to="#" class="link link-hover">
            Marketing
          </Link>
          <Link to="#" class="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <Link to="#" class="link link-hover">
            About us
          </Link>
          <Link to="#" class="link link-hover">
            Contact
          </Link>
          <Link to="#" class="link link-hover">
            Jobs
          </Link>
          <Link to="#" class="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <Link to="#" class="link link-hover">
            Terms of use
          </Link>
          <Link to="#" class="link link-hover">
            Privacy policy
          </Link>
          <Link to="#" class="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
      <p className="text-center mb-2">
        Copyright © {date} - All right reserved by Misbahul Haq
      </p>
    </div>
  );
};

export default Footer;

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle,  } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#0b1315] text-white">
        <div>
          <p>
            <span className="text-primary text-3xl font-bold">Melody Mentor</span>
            <br />
            <br />
            Providing reliable Music Learning And Courses
          </p>
          <div className="flex justify-center mt-2">
            <Link to="#" className=" mr-2">
              <FaFacebook className="text-white text-xl" />
            </Link>
            <Link to="#" className="mr-2">
              <FaTwitter className="text-white text-xl" />
            </Link>
            <Link to="#" className="mr-2">
              <FaInstagram className="text-white text-xl" />
            </Link>
            <Link to="#" className="mr-2">
              <FaGoogle className="text-white text-xl" />
            </Link>
          </div>
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <a className="link link-hover"> Support</a>
          <a className="link link-hover">Helpline</a>
          <a className="link link-hover"> Solutions</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Media kit</a>
          <a className="link link-hover">Marketing</a>
        </div>
        <div>
          <span className="footer-title">Store Information</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

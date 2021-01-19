import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div className="footer">
      <Link to={"/"}>
        <p className="footer-link">2020 - megustaelarte.com</p>
      </Link>
      <div>
        <p className='icons'><i className="fab fa-instagram"></i> <i className="fab fa-facebook-square"></i> <i className="fab fa-twitter-square"></i></p>
      </div>
    </div>
  );
}

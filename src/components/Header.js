import React from "react";
import "../css/header.css";
import { FaQuoteLeft } from "react-icons/fa";

const Header = () => {
  return (
    <div className="no-wrapper header">
      <div className="wrapper">
        <div className="header-content">
          <div className="header-title">
            <span className="quote-icon">
              <FaQuoteLeft />
            </span>
            We provide the best solution within the best deliverable time
            possible. This is a professional association for research assistance
            and content writing services in the field of science, arts, social
            sciences, education, engineering etc. With an experienced team and
            access to multiple resources and tools we guarantee quality work
            completed in accordance with the provided instructions and time
            frame.
          </div>
          <div className="header-form">
            <div className="card">
              <p className="card-title">Price Calculator</p>
              <form className="main-form">
                <div className="form-group">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="someone@email.com"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone"></label>
                  <input
                    type="tel"
                    name="phone"
                    id=""
                    placeholder="+91 91345 12345"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Country"></label>
                  <input
                    type="text"
                    name="country"
                    id=""
                    placeholder="Country"
                    className="form-control"
                  />
                </div>
                <div className="form-group form-flex">
                  <select name="paper" id="" className="form-control">
                    <option value="" disabled selected>
                      Select Paper Type
                    </option>
                  </select>
                  <select name="standard" id="" className="form-control">
                    <option value="" disabled selected>
                      Writing Standard
                    </option>
                  </select>
                </div>
                <div className="form-group form-flex">
                  <select name="deadline" id="" className="form-control">
                    <option value="" disabled selected>
                      Project Deadline
                    </option>
                  </select>
                  <select name="pages" id="" className="form-control">
                    <option value="" disabled selected>
                      Number of Pages
                    </option>
                  </select>
                </div>
                <div className="form-group promo form-flex">
                  <label htmlFor="promo"></label>
                  <input
                    type="text"
                    name="promo"
                    id=""
                    placeholder="Promo Code"
                    className="form-control"
                  />
                  <button className="promo-apply">Apply</button>
                </div>
                <p>Original Price : $</p>
                <p>Discounted Price : $</p>
                <button type="submit" className="form-control">
                  Book Now
                </button>
              </form>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

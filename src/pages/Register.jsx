import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import logo from "../assets/images/logo.png";

const Register = () => {
  return (
    <div>
      <Navigation />
      <section className="section" id="home">
        <div className="has-text-centered fade-in">
          <img className="py-6" src={logo} alt="Logo" />
        </div>
        <div className="columns is-centered zoom">
          <div className="column is-4">
            <div className="box">
              <div className="container content is-large">
                <p className="title is-3 center">Registration</p>
                <p className="subtitle is-6 center">
                  Brothers of Christ of Banneux, Inc.
                </p>
                <form>
                  <div className="field is-horizontal">
                    <div className="field-body mb-4">
                      <div className="field">
                        <p className="control has-icons-left">
                          <input
                            className="input"
                            type="text"
                            name="firstname"
                            placeholder="First Name"
                            required
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-font"></i>
                          </span>
                        </p>
                      </div>
                      <div className="field">
                        <p className="control has-icons-left">
                          <input
                            className="input"
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                            required
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-font"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="field mb-4">
                    <p className="control has-icons-left">
                      <input
                        className="input"
                        type="number"
                        name="phone"
                        placeholder="Phone Number"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-phone-alt"></i>
                      </span>
                    </p>
                  </div>
                  <div className="field mb-4">
                    <p className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user-alt"></i>
                      </span>
                    </p>
                  </div>
                  <div className="field mb-4">
                    <p className="control has-icons-left">
                      <input
                        className="input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </p>
                  </div>
                  <div className="field mb-4">
                    <p className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-key"></i>
                      </span>
                    </p>
                  </div>
                  <div className="field mb-4">
                    <p className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        name="confirmpassword"
                        placeholder="Confirm Password"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-key"></i>
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <button
                        className="button is-info has-text-weight-bold mr-4"
                        type="submit"
                      >
                        Register
                      </button>
                      <Link to="/login" className="button">
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import logo from "../assets/images/logo.png";
import { FaUser } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";



const Login = () => {
  return (
    <div>
      <Navigation />
      <section className="section" id="home">
        <div className="has-text-centered fade-in">
          <img className="py-6" src={logo} alt="Logo" />
        </div>
        <div className="columns is-centered zoom">
          <div className="column is-3">
            <div className="box">
              <div className="container content is-large">
                <p className="title is-3 center">Login</p>
                <p className="subtitle is-6 center">Brothers of Christ of Banneux, Inc.</p>
                <form>
                  <div className="field my-4">
                    <p className="control has-icons-left">
                      <input className="input" type="text" name="username" placeholder="Username" required />
                      <span className="icon is-small is-left">
                        <FaUser />
                      </span>
                    </p>
                  </div>
                  <div className="field my-4">
                    <p className="control has-icons-left">
                      <input className="input" type="password" name="password" placeholder="Password" required />
                      <span className="icon is-small is-left">
                        <MdOutlinePassword />
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <button className="button is-info has-text-weight-bold mr-4" type="submit">
                        Login
                      </button>
                      <Link to="/register" className="button">
                        Register
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

export default Login;
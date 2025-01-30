import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaUser } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:1337/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Store user data in localStorage or context if needed
      localStorage.setItem("user", JSON.stringify(data.user));
      
      // Login successful
      alert("Login successful!");
      navigate("/dashboard"); // or wherever you want to redirect after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <section className="section" id="home">
        <div className="has-text-centered fade-in">
          <img className="py-6" src={logo} alt="Logo" />
        </div>
        <div className="columns is-centered zoom">
          <div className="column is-3">
            <div className="box">
              <div className="container content is-large">
                <p className="title is-3 center">Logn</p>
                <p className="subtitle is-6 center">Brothers of Christ of Banneux, Inc.</p>
                {error && (
                  <div className="notification is-danger is-light">{error}</div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="field my-4">
                    <p className="control has-icons-left">
                      <input 
                        className="input" 
                        type="text" 
                        name="username" 
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username" 
                        required 
                      />
                      <span className="icon is-small is-left">
                        <FaUser />
                      </span>
                    </p>
                  </div>
                  <div className="field my-4">
                    <p className="control has-icons-left">
                      <input 
                        className="input" 
                        type="password" 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password" 
                        required 
                      />
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
                      <Link to="/register" className="button is-danger is-rounded p-6">
                        Register?
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
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaFont, FaPhoneAlt, FaUser, FaKey, FaEnvelope } from "react-icons/fa";
import { BsGenderAmbiguous } from "react-icons/bs";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    sex: "",
    phone: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:1337/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registration failed");
      }

      // Registration successful
      alert("Registration successful!");
      navigate("/login");
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
          <div className="column is-4">
            <div className="box">
              <div className="container content is-large">
                <p className="title is-3 center">Registration</p>
                <p className="subtitle is-6 center">
                  Brothers of Christ of Banneux, Inc.
                </p>
                {error && (
                  <div className="notification is-danger is-light">{error}</div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="field is-horizontal">
                    <div className="field-body mb-4">
                      <div className="field">
                        <p className="control has-icons-left">
                          <input
                            className="input"
                            type="text"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            placeholder="First Name"
                            required
                          />
                          <span className="icon is-small is-left">
                            <FaFont />
                          </span>
                        </p>
                      </div>
                      <div className="field">
                        <p className="control has-icons-left">
                          <input
                            className="input"
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            placeholder="Last Name"
                            required
                          />
                          <span className="icon is-small is-left">
                            <FaFont />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="field mb-4">
                    <p className="control has-icons-left">
                      <div className="select is-fullwidth">
                        <select
                          name="sex"
                          value={formData.sex}
                          onChange={handleChange}
                          required
                          defaultValue=""
                          style={{ paddingLeft: "2.5em" }}
                        >
                          <option value="" disabled>
                            Select Gender
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Prefer not to say</option>
                        </select>
                      </div>
                      <span className="icon is-small is-left">
                        <BsGenderAmbiguous />
                      </span>
                    </p>
                  </div>

                  <div className="field mb-4">
                    <p className="control has-icons-left">
                      <input
                        className="input"
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                      />
                      <span className="icon is-small is-left">
                        <FaPhoneAlt />
                      </span>
                    </p>
                  </div>
                  <div className="field mb-4">
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
                  <div className="field mb-4">
                    <p className="control has-icons-left">
                      <input
                        className="input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                      />
                      <span className="icon is-small is-left">
                        <FaEnvelope />
                      </span>
                    </p>
                  </div>
                  <div className="field mb-4">
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
                        <FaKey />
                      </span>
                    </p>
                  </div>
                  <div className="field mb-4">
                    <p className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        name="confirmpassword"
                        value={formData.confirmpassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        required
                      />
                      <span className="icon is-small is-left">
                        <FaKey />
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

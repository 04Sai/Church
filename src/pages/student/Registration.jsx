import { useState } from "react";
import AccountHeader from "../../components/account/AccountHeader";
import SidePanel from "../../components/account/SidePanel";
import QuickLinks from "../../components/account/QuickLinks";
import { FaUpload } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";

const Registration = () => {
  const [selectedForm, setSelectedForm] = useState("");
  const [customForm, setCustomForm] = useState("");

  const handleFormChange = (e) => {
    setSelectedForm(e.target.value);
  };

  return (
    <section className="section">
      <AccountHeader />
      <div className="container mt-5">
        <div className="columns">
          {/* SidePanel */}
          <div className="column is-2">
            <SidePanel />
          </div>

          {/* Registration Content */}
          <div className="column">
            <div className="columns">
              {/* Form Content */}
              <div className="column is-9">
                <section className="info-tiles mt-3">
                  <div className="tile is-ancestor">
                    <div className="tile is-parent is-vertical">
                      <div className="tile is-child card">
                        <header className="card-header">
                          <p className="card-header-title">Registration</p>
                        </header>
                        <div className="card-content content">
                          {/* Upload Section */}
                          <div className="mb-5">
                            <p className="title is-4">Upload Documents</p>
                            <div className="columns is-centered">
                              <div className="column is-6">
                                <div className="select is-info is-fullwidth">
                                  <select onChange={handleFormChange}>
                                    <option>Select a form</option>
                                    <option>Form - 137</option>
                                    <option>Birth Certificate</option>
                                    <option>Certificate of Baptismal</option>
                                    <option>(not in the choices)</option>
                                  </select>
                                </div>
                                <div className="field mt-2">
                                  <div className="control">
                                    <input
                                      className="input is-small is-info"
                                      type="text"
                                      value={customForm}
                                      onChange={(e) =>
                                        setCustomForm(e.target.value)
                                      }
                                      placeholder="Enter your form type"
                                      disabled={
                                        selectedForm !== "(not in the choices)"
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="file is-boxed is-info is-centered mt-2 zoom">
                                  <label className="file-label">
                                    <input
                                      className="file-input"
                                      type="file"
                                      name="boc_document"
                                    />
                                    <span className="file-cta">
                                      <span className="file-icon">
                                        <FaUpload />
                                      </span>
                                      <span className="file-label">Upload</span>
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <hr />

                          {/* Download Section */}
                          <div>
                            <p className="title is-4">Download Forms</p>
                            <div className="columns is-centered">
                              <div className="column is-6">
                                <div className="select is-info is-fullwidth">
                                  <select>
                                    <option>Select a form</option>
                                    <option>Form - 138</option>
                                    <option>Registration Form</option>
                                    <option>Proof of Transactions</option>
                                  </select>
                                </div>
                                <div className="file is-boxed is-info is-centered mt-2 zoom">
                                  <a href="/files/sample.pdf" download>
                                    <label className="file-label">
                                      <span className="file-cta">
                                        <span className="file-icon">
                                          <FaDownload />
                                        </span>
                                        <span className="file-label">
                                          Download
                                        </span>
                                      </span>
                                    </label>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Quick Links */}
              <div className="column is-3">
                <QuickLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;

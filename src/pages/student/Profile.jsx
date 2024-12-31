import AccountHeader from "../../components/account/AccountHeader";
import SidePanel from "../../components/account/SidePanel";
import QuickLinks from "../../components/account/QuickLinks";

const Profile = () => {
  return (
    <section className="section">
      <AccountHeader />
      <div className="container mt-5">
        <div className="columns">
          {/* SidePanel */}
          <div className="column is-2">
            <SidePanel />
          </div>

          {/* Profile Content */}
          <div className="column">
            <div className="columns">
              {/* Profile Details */}
              <div className="column is-9">
                <section className="info-tiles mt-3">
                  <div className="tile is-ancestor">
                    <div className="tile is-parent is-vertical">
                      <div className="tile is-child card">
                        <header className="card-header">
                          <p className="card-header-title">Personal Details</p>
                        </header>
                        <div className="card-content content">
                          <div className="field is-horizontal">
                            <div className="field-label is-normal">
                              <label className="label">First Name:</label>
                            </div>
                            <div className="field-body mr-6">
                              <div className="field">
                                <div className="control">
                                  <input className="input" type="text" value="LANCE" disabled />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="field is-horizontal">
                            <div className="field-label is-normal">
                              <label className="label">Last Name:</label>
                            </div>
                            <div className="field-body mr-6">
                              <div className="field">
                                <div className="control">
                                  <input className="input" type="text" value="LISTANA" disabled />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="field is-horizontal">
                            <div className="field-label is-normal">
                              <label className="label">Birth Date:</label>
                            </div>
                            <div className="field-body mr-6">
                              <div className="field">
                                <div className="control">
                                  <input className="input" type="date" />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="field is-horizontal">
                            <div className="field-label is-normal">
                              <label className="label">Phone Number:</label>
                            </div>
                            <div className="field-body mr-6">
                              <div className="field has-addons">
                                <div className="control">
                                  <a className="button is-static">+63</a>
                                </div>
                                <div className="control is-expanded">
                                  <input className="input" id="phone-input" type="number" defaultValue="9123456789" />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="field is-horizontal">
                            <div className="field-label is-normal">
                              <label className="label">Address:</label>
                            </div>
                            <div className="field-body mr-6">
                              <div className="field">
                                <div className="control">
                                  <textarea 
                                    className="textarea" 
                                    rows="2"
                                    defaultValue="Brgy.Biclatan, Gen Tri, 4107 Cavite"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="buttons is-right mr-6">
                            <button className="button is-info zoom">Submit Changes</button>
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

export default Profile;

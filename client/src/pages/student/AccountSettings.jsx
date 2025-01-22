import AccountHeader from "../../components/account/AccountHeader";
import SidePanel from "../../components/account/SidePanel";
import QuickLinks from "../../components/account/QuickLinks";

const AccountSettings = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <section className="section">
      <AccountHeader />
      <div className="container mt-5">
        <div className="columns">
          {/* SidePanel */}
          <div className="column is-2 is-hidden-mobile">
            <SidePanel />
          </div>

          {/* Account Settings Content */}
          <div className="column">
            <div className="columns">
              {/* Account Settings Details */}
              <div className="column is-9">
                <section className="info-tiles mt-3">
                  <div className="tile is-ancestor">
                    <div className="tile is-parent">
                      <div className="tile is-child card">
                        <header className="card-header">
                          <p className="card-header-title">Account Settings</p>
                        </header>
                        <div className="card-content content">
                          <div className="columns is-centered">
                            <div className="column is-half">
                              <div className="field">
                                <label className="label">Username</label>
                                <div className="control">
                                  <input 
                                    type="text" 
                                    className="input" 
                                    defaultValue={user.username || ''} 
                                    placeholder="Enter Username" 
                                  />
                                </div>
                              </div>

                              <label className="label">Email</label>
                              <div className="field has-addons">
                                <p className="control is-expanded">
                                  <input 
                                    className="input" 
                                    type="text" 
                                    defaultValue={user.email?.split('@')[0] || ''} 
                                    placeholder="Your email" 
                                    disabled 
                                  />
                                </p>
                                <p className="control">
                                  <a className="button is-static">@bcbi.org</a>
                                </p>
                              </div>
                            </div>
                            
                            <div className="column">
                              <div className="field">
                                <label className="label">Current Password</label>
                                <div className="control">
                                  <input type="password" className="input" placeholder="********" />
                                </div>
                              </div>

                              <div className="field">
                                <label className="label">New Password</label>
                                <div className="control">
                                  <input type="password" className="input" placeholder="********" />
                                </div>
                              </div>

                              <div className="field">
                                <label className="label">Confirm Password</label>
                                <div className="control">
                                  <input type="password" className="input" placeholder="********" />
                                </div>
                              </div>

                              <div className="buttons is-right">
                                <button className="button is-info zoom">Submit Changes</button>
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

export default AccountSettings;
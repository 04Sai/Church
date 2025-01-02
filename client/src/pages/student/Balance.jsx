import AccountHeader from "../../components/account/AccountHeader";
import SidePanel from "../../components/account/SidePanel";
import QuickLinks from "../../components/account/QuickLinks";

const Balance = () => {
  const balanceData = [
    { term: "Registration", fee: 1282.00, status: "Paid" },
    { term: "Prelim", fee: 1870.00, status: "Paid" },
    { term: "Midterm", fee: 1358.00, status: "Paid" },
    { term: "Finals", fee: 2657.00, status: "Paid" }
  ];

  const totalFee = balanceData.reduce((sum, item) => sum + item.fee, 0);

  return (
    <section className="section">
      <AccountHeader />
      <div className="container mt-5">
        <div className="columns">
          {/* SidePanel */}
          <div className="column is-2">
            <SidePanel />
          </div>

          {/* Balance Content */}
          <div className="column">
            <div className="columns">
              {/* Balance Details */}
              <div className="column is-9">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">Account Balance</p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      {/* Terms Table */}
                      <table className="table is-bordered is-striped is-hoverable is-fullwidth mb-5">
                        <thead>
                          <tr className="has-background-info-light">
                            <th className="has-text-info">Term</th>
                            <th className="has-text-info has-text-right">Fee</th>
                            <th className="has-text-info has-text-centered">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {balanceData.map((item, index) => (
                            <tr key={index}>
                              <td className="has-text-grey-dark">{item.term}</td>
                              <td className="has-text-right">
                                ₱{item.fee.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                              </td>
                              <td className="has-text-centered">
                                <span className="tag is-success is-light">
                                  {item.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      {/* Summary Table */}
                      <table className="table is-bordered is-hoverable is-fullwidth">
                        <thead>
                          <tr className="has-background-info-light">
                            <th className="has-text-info">Total Fee</th>
                            <th className="has-text-info">Total Paid</th>
                            <th className="has-text-info">Remaining Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="has-text-right has-text-weight-bold">
                              ₱{totalFee.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </td>
                            <td className="has-text-right has-text-weight-bold">
                              ₱{totalFee.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </td>
                            <td className="has-text-centered">
                              <span className="tag is-success">FULLY PAID</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
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

export default Balance;
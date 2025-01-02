import AccountHeader from "../../components/account/AccountHeader";
import SidePanel from "../../components/account/SidePanel";
import QuickLinks from "../../components/account/QuickLinks";

const Grades = () => {
  const gradeData = {
    firstSem: [
      { subject: "AP", title: "Araling Panlipunan", midterms: 89, finals: 82 },
      { subject: "ENG", title: "English", midterms: 94, finals: 98 },
      { subject: "FIL", title: "Filipino", midterms: 87, finals: 91 },
      {
        subject: "MAPEH",
        title: "Music, Arts, PE, Health",
        midterms: 87,
        finals: 80,
      },
      { subject: "MATH", title: "Mathematics", midterms: 81, finals: 83 },
      { subject: "RELIGION", title: "Religion", midterms: 100, finals: 100 },
    ],
    secondSem: [
      // ... same structure as firstSem
    ],
  };

  const renderGradeTable = (semesterData) => (
    <div className="table-container">
      <table className="table is-bordered is-striped is-hoverable is-fullwidth">
        <thead>
          <tr className="has-background-info-light">
            <th className="has-text-info">Subject</th>
            <th className="has-text-centered has-text-info">Midterms</th>
            <th className="has-text-centered has-text-info">Finals</th>
          </tr>
        </thead>
        <tbody>
          {semesterData.map((grade, index) => (
            <tr key={index}>
              <td>
                <div className="is-flex is-align-items-center">
                  <span className="tag is-info is-light mr-2">{grade.subject}</span>
                  <span className="has-text-grey-dark">{grade.title}</span>
                </div>
              </td>
              <td className="has-text-centered">
                <span
                  className={`tag is-medium ${
                    grade.midterms >= 75 
                      ? grade.midterms >= 90 
                        ? "is-success" 
                        : "is-info"
                      : "is-danger"
                  }`}
                >
                  {grade.midterms}
                </span>
              </td>
              <td className="has-text-centered">
                <span
                  className={`tag is-medium ${
                    grade.finals >= 75 
                      ? grade.finals >= 90 
                        ? "is-success" 
                        : "is-info"
                      : "is-danger"
                  }`}
                >
                  {grade.finals}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <section className="section">
      <AccountHeader />
      <div className="container mt-5">
        <div className="columns">
          {/* SidePanel */}
          <div className="column is-2">
            <SidePanel />
          </div>

          {/* Grades Content */}
          <div className="column">
            <div className="columns">
              {/* Grades Details */}
              <div className="column is-9">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">Academic Performance</p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <h4 className="title is-5 mb-3">First Semester</h4>
                      {renderGradeTable(gradeData.firstSem)}
                      <h4 className="title is-5 mb-3 mt-5">Second Semester</h4>
                      {renderGradeTable(gradeData.firstSem)}{" "}
                      {/* Change to secondSem when you have the data */}
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

export default Grades;

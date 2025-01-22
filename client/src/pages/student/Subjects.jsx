import AccountHeader from "../../components/account/AccountHeader";
import SidePanel from "../../components/account/SidePanel";
import QuickLinks from "../../components/account/QuickLinks";

const Subjects = () => {
  const subjectsData = [
    {
      code: "AP",
      name: "Araling Panlipunan",
      room: "101",
      instructor: "Muñoz, Eduardo",
      days: "MON | WED",
      time: "8:00 AM - 10:00 AM"
    },
    {
      code: "ENG",
      name: "English",
      room: "105",
      instructor: "Torres, Jose Antonio",
      days: "TUE | THU",
      time: "10:30 AM - 12:00 PM"
    },
    {
      code: "FIL",
      name: "Filipino",
      room: "105",
      instructor: "Perez, Jesus",
      days: "MON | THU",
      time: "1:00 PM - 2:30 PM"
    },
    {
      code: "MAPEH",
      name: "Music, Arts, PE, Health",
      room: "Gymnasium",
      instructor: "Velasco, Joaquin",
      days: "TUE | FRI",
      time: "8:00 AM - 10:00 AM"
    },
    {
      code: "MATH",
      name: "Mathematics",
      room: "101",
      instructor: "Roman, Oscar",
      days: "WED | FRI",
      time: "10:30 AM - 12:00 PM"
    },
    {
      code: "RELIGION",
      name: "Religion",
      room: "Main Chapel",
      instructor: "Fr. Stuartz, Frank",
      days: "MON - SAT",
      time: "7:00 AM - 8:00 AM\n5:00 PM - 6:00 PM"
    }
  ];

  return (
    <section className="section">
      <AccountHeader />
      <div className="container mt-5">
        <div className="columns">
          {/* SidePanel */}
          <div className="column is-2 is-hidden-mobile">
            <SidePanel />
          </div>

          {/* Subjects Content */}
          <div className="column">
            <div className="columns">
              {/* Subjects Table */}
              <div className="column is-9">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">Enrolled Subjects</p>
                  </header>
                  <div className="card-content table-container">
                    <table className="table is-bordered is-striped is-hoverable is-fullwidth">
                      <thead>
                        <tr className="has-background-info-light">
                          <th className="has-text-info">Subject</th>
                          <th className="has-text-info">Room</th>
                          <th className="has-text-info">Instructor</th>
                          <th className="has-text-info">Schedule</th>
                          <th className="has-text-info">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subjectsData.map((subject, index) => (
                          <tr key={index}>
                            <td>
                              <div className="is-flex is-align-items-center">
                                <span className="tag is-info is-light mr-2">{subject.code}</span>
                                <span className="has-text-grey-dark">{subject.name}</span>
                              </div>
                            </td>
                            <td>
                              <span className="tag is-light">{subject.room}</span>
                            </td>
                            <td className="has-text-grey-dark">{subject.instructor}</td>
                            <td>
                              <span className="tag is-primary is-light">{subject.days}</span>
                            </td>
                            <td>
                              <span className="tag is-warning is-light" style={{ whiteSpace: 'pre-line' }}>
                                {subject.time}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default Subjects;
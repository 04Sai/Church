import AccountHeader from "../../components/account/AccountHeader";
import SidePanel from "../../components/account/SidePanel";
import QuickLinks from "../../components/account/QuickLinks";

const Dashboard = () => {
  return (
    <section className="section">
      <AccountHeader />
      <div className="container mt-5">
        <div className="columns">
          {/* SidePanel - Only visible on desktop */}
          <div className="column is-2 is-hidden-mobile">
            <SidePanel />
          </div>

          {/* Dashboard Content */}
          <div className="column">
            <div className="columns">
              {/* Dashboard Tiles */}
              <div className="column is-9">
                <section className="info-tiles">
                  <div className="tile is-ancestor has-text-centered">
                    {/* Tile 1 */}
                    <div className="tile is-parent">
                      <article className="tile is-child box notification is-primary mb-3">
                        <p className="title is-4">2024 - 2025</p>
                        <p className="subtitle">Academic Year</p>
                      </article>
                    </div>
                    {/* Tile 2 */}
                    <div className="tile is-parent">
                      <article className="tile is-child box notification is-warning mb-3">
                        <p className="title is-4">FIRST</p>
                        <p className="subtitle">Semester</p>
                      </article>
                    </div>
                    {/* Tile 3 */}
                    <div className="tile is-parent">
                      <article className="tile is-child box notification is-danger mb-3">
                        <p className="title is-4">Not Enrolled</p>
                        <p className="subtitle">Status</p>
                      </article>
                    </div>
                    {/* Tile 4 */}
                    <div className="tile is-parent">
                      <article className="tile is-child box notification is-success">
                        <p className="title is-4">BSIT</p>
                        <p className="subtitle">Course</p>
                      </article>
                    </div>
                  </div>
                </section>

                {/* News Section */}
                <section className="info-tiles mt-3">
                  <div className="tile is-ancestor">
                    <div className="tile is-9 is-vertical is-parent">
                      <div className="tile is-child card">
                        <header className="card-header">
                          <p className="card-header-title">
                            News & Announcement
                          </p>
                        </header>
                        <div className="card-content content">
                          <p>
                            <b>
                              <u>New Students</u>
                            </b>
                            <br />
                            If you are a new student planning to enroll in our
                            Christian school, we warmly welcome you! We invite
                            you to visit our admissions office during office
                            hours to complete the registration process. Our
                            admissions team will be available to assist you with
                            any inquiries and guide you through the necessary
                            steps.
                          </p>

                          <p>
                            <b>
                              <u>Returning Students</u>
                            </b>
                            <br />
                            For our valued returning students, it&apos;s time to
                            prepare for the upcoming semester. Online
                            registration will open on July 15, 2023. Please log
                            in to the student portal using your credentials to
                            access the registration system. Follow the
                            instructions provided to select your courses and
                            complete the registration process. Should you
                            encounter any difficulties, our administrative staff
                            is ready to support you.
                          </p>

                          <p>
                            <b>
                              <u>Spiritual Events</u>
                            </b>
                          </p>

                          <ul>
                            <li>Date: Every Wednesday at 5:00 PM</li>
                            <li>Location: Main Chapel</li>
                            <li>
                              Description: Join us for a weekly prayer gathering
                              where students come together to seek spiritual
                              guidance, engage in collective prayer, and foster
                              a sense of community.
                            </li>
                          </ul>

                          <p>
                            <b>
                              <u>Christian Holidays</u>
                            </b>
                          </p>

                          <ul>
                            <li>Holiday: Christmas Eve Candlelight Service</li>
                            <li>Date: December 24, 2023 at 8:00 PM</li>
                            <li>
                              Description: Celebrate the birth of Jesus Christ
                              in a special candlelight service filled with
                              Christmas carols, Scripture readings, and a
                              message of hope and salvation. Bring your family
                              and friends to experience the joy of Christmas
                              together.
                            </li>
                          </ul>
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

export default Dashboard;

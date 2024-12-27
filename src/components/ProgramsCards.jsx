import { FaBullseye } from "react-icons/fa";
import pwd from "../assets/images/pwd.jpg";
import students from "../assets/images/students.jpg";

const ProgramsCards = () => {
  return (
    <>
      <section className="section">
        <article>
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-6 is-flex">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={students} alt="PWD" />
                    </figure>
                    <div className="content">
                      <p className="title is-4 p-5 has-text-info">
                        Out of School Youth
                      </p>
                      <p className="subtitle is-6 px-5 pb-5">
                        <span className="icon-text">
                          <span className="icon">
                            <FaBullseye />
                          </span>
                          <span>
                            ALS for Junior High School and Elementary Level
                          </span>
                        </span>

                        <span className="icon-text">
                          <span className="icon">
                            <FaBullseye />
                          </span>
                          <span>
                            Electrical Installation and Maintenance NC II
                          </span>
                        </span>

                        <span className="icon-text">
                          <span className="icon">
                            <FaBullseye />
                          </span>
                          <span>
                            Shielded Metal Arc in Welding NC I and NC II
                          </span>
                        </span>
                        <br />

                        <span className="icon-text">
                          <span className="icon">
                            <FaBullseye />
                          </span>
                          <span>Job Placement</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-6 is-flex">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={pwd} alt="PWD" />
                    </figure>
                    <div className="content">
                      <p className="title is-4 p-5 has-text-info">
                        Homelife Services
                      </p>
                      <p className="subtitle is-6 px-5 pb-5">
                        <span className="icon-text">
                          <span className="icon">
                            <FaBullseye />
                          </span>
                          <span>Dietary Services</span>
                        </span>

                        <span className="icon-text">
                          <span className="icon">
                            <FaBullseye />
                          </span>
                          <span>Health Services</span>
                        </span>

                        <span className="icon-text">
                          <span className="icon">
                            <FaBullseye />
                          </span>
                          <span>Psychological Services</span>
                        </span>
                        <br />

                        <span className="icon-text">
                          <span className="icon">
                            <FaBullseye />
                          </span>
                          <span>Spiritual Services</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default ProgramsCards;

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
              <div className="column is-half">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={students} alt="PWD" />
                    </figure>
                    <div className="content">
                      <p className="title is-4 p-5 has-text-info">
                        Out of School Youth
                      </p>
                      <div className="subtitle is-6 px-5 pb-5">
                        <div className="icon-text">
                          <div className="icon">
                            <FaBullseye />
                          </div>
                          <div>
                            ALS for Junior High School and Elementary Level
                          </div>
                        </div>
                        <div className="icon-text">
                          <div className="icon">
                            <FaBullseye />
                          </div>
                          <div>
                            Electrical Installation and Maintenance NC II
                          </div>
                        </div>
                        <div className="icon-text">
                          <div className="icon">
                            <FaBullseye />
                          </div>
                          <div>
                            Shielded Metal Arc in Welding NC I and NC II
                          </div>
                        </div>
                        <div className="icon-text">
                          <div className="icon">
                            <FaBullseye />
                          </div>
                          <div>Job Placement</div>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-half">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={pwd} alt="PWD" />
                    </figure>
                    <div className="content">
                      <p className="title is-4 p-5 has-text-info">
                        Person with Disabilities and Elderly
                      </p>
                      <div className="subtitle is-6 px-5 pb-5">
                        <div className="icon-text">
                          <div className="icon">
                            <FaBullseye />
                          </div>
                          <div>Homelife Services</div>
                        </div>
                        <div className="icon-text">
                          <div className="icon">
                            <FaBullseye />
                          </div>
                          <div>Dietary Services</div>
                        </div>
                        <div className="icon-text">
                          <div className="icon">
                            <FaBullseye />
                          </div>
                          <div>Health Services</div>
                        </div>
                        <div className="icon-text">
                          <div className="icon">
                            <FaBullseye />
                          </div>
                          <div>Psychological Services</div>
                        </div>
                        <div className="icon-text">
                          <div className="icon">
                            <FaBullseye />
                          </div>
                          <div>Spiritual Services</div>
                        </div>
                      </div>
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

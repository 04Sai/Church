import gradpic from "../assets/gadpic.jpg";

import { CiCircleCheck } from "react-icons/ci";
const About = () => {
  return (
    <section className="section" id="about">
      <center>
        <article>
          <div className="container">
            <h1 className="title is-1 has-text-info">About Us</h1>
            <p className="has-text-justified">
              The <strong>BROTHERS OF CHRIST OF BANNEUS, INC. (BCBI)</strong> is
              a regligious congregation for boys founded by the servant of God
              Venerable Aloysius Schwartz to respond to the reality of poverty,
              suffering and deprivation of the poorest of the poor. The BCBI in
              the Philippines is operating as Social Welfare and Development
              Agency under the supervision of Department of Social Welfare and
              Development (DSWD) with SEC reg. <em>#CN200815107</em> and license
              <em>#DSWD-FO-IV-A L-00029-2020</em>.
            </p>
            <br />
            <p className="has-text-justified">
              The programs and services offered by BCBI is 24 hours residential
              based services for Out of School Youth, Person with Disabilities
              and Elderly. The institution provides a comprehensive and
              integrated delivery of residential care services using
              interdisciplinary approach. The Brothers of Christ works primarily
              by establishing Brothers of Christ of Bannuex Inc. That serves as
              boarding schools for deserving out of school youth students coming
              from poor families. The institution provides food, clothing,
              shelter, medical care and quality secondary education through
              Alternative Learning System and technical-vocational curriculum,
              all free of charge.
            </p>
            <br />
            <div className="columns">
              <div className="column card">
                <div className="card-image mb-0">
                  <figure className="image is-4by3">
                    <img src={gradpic} alt="Image Card" />
                  </figure>
                </div>
              </div>
              <div className="column card">
                <div className="card-content">
                  <div className="content has-text-left">
                    <h1 className="subtitle is-4 has-text-info">
                      Sharing Crhist&apos;s Home.
                    </h1>

                    <span className="icon-text">
                      <span className="icon">
                        <CiCircleCheck />
                      </span>
                      <span className="has-text-weight-bold">GOAL</span>
                    </span>

                    <p className="has-text-justified">
                      Provision of care, protection and training to the
                      physically and mentally challenged men and the out of
                      school youth enabling them to less dependent on others and
                      attaining the optimum capabilities and potentials.
                    </p>
                    <span className="icon-text">
                      <span className="icon">
                        <CiCircleCheck />
                      </span>
                      <span className="has-text-weight-bold">MISSION</span>
                    </span>

                    <p className="has-text-justified">
                      The institution, inspired by its Patroness, the Virgin of
                      the Poor, shall direct its energy and resources to the
                      physically and mentally challenged men and the out of
                      school youth by rendering various forms of assistance and
                      service that include direct evangelization and values
                      formation as well as the livelihood program trainings.
                      Self-help projects, recreational facilities, moral and
                      spiritual based on the Gospel
                    </p>
                    <span className="icon-text">
                      <span className="icon">
                        <CiCircleCheck />
                      </span>
                      <span className="has-text-weight-bold">VISION</span>
                    </span>
                    <p>
                      To rehabilitate the physically and mentally challenged men
                      and trained the out of school youth in different
                      vocational skills enabling them to attain the maximum use
                      of limited capabilities and potentials with competencies,
                      entrepreneurship and ultimate gainful employment for the
                      large scale work place and the same time, teach them lead
                      by the example of the Marian virtues of simplicity,
                      charity, gratitude and joy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </center>
    </section>
  );
};

export default About;

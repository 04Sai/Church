import { CiMap } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Map from "./Map";

const IconText = ({ icon, title, children }) => {
  return (
    <div className="icon-text">
      <span className="icon-is-large" style={{ marginRight: "1rem" }}>
        {icon}
      </span>
      <p className="subtitle is-6">
        <b>{title}</b>
        <br />
        <i>{children}</i>
      </p>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <section className="section" id="contact">
        <article>
          <div className="container">
            <p className="title is-1 has-text-info center">Contact Us</p>
            <div className="columns">
              <div className="column is-4">
                <div className="box">
                  <p className="title is-4">Get in touch</p>
                  <p className="subtitle is-6">
                    You can contact us through the following:
                  </p>
                  <hr />
                  <IconText icon={<CiMap size={32} />} title="Location:">
                    Brgy.Biclatan, Gen Tri, 4107 Cavite
                  </IconText>
                  <hr />
                  <IconText icon={<CiMail size={32} />} title="Email:">
                    brosphtrece@yahoo.com
                  </IconText>
                  <hr />
                  <IconText icon={<FaPhone size={32} />} title="Phone:">
                    0927-273-9941 / 0928-976-2483
                  </IconText>
                  <hr />
                  <IconText icon={<FaFacebook size={32} />} title="Facebook:">
                    Brothers of Christ of Bannuex Inc.
                  </IconText>
                </div>
              </div>
              <div className="column is-8">
                <div className="box">
                  <Map />
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Contact;

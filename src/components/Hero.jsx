import logo from "../assets/images/logo.png";
const Hero = () => {
  return (
    <>
      <section className="section" id="home">
        <div>
          <center>
            <br />
            <br />
            <br />
            <img src={logo} alt="Logo" />
            <h1 className="has-text-white has-text-shadow-blue title is-1">
              Brothers of Christ of Banneux, Inc.
            </h1>
            <br />
            <p className="subtitle has-text-white has-text-shadow-blue">
              Sharing Christ Home.
            </p>
          </center>
        </div>
      </section>

      <section className="section">
        <center>
          <div className="column is-three-fifths">
            <div className="box">
              <div className="container content">
                <h6>Location:</h6>
                <p>Brgy.Biclatan, General Trias, 4107 Cavite</p>
                <hr />
                <h6>Email:</h6>
                <a href="mailto:brosphtrece@yahoo.com">brosphtrece@yahoo.com</a>
                <hr />
                <h6>Contact No.:</h6>
                <p>0927-273-9941 / 0928-976-2483 / 046-865-4012</p>
                <hr />
                <h6>Facebook:</h6>
                <a href="https://web.facebook.com/BOCPhilippines">
                  Brothers of Christ of Bannuex Inc.
                </a>
              </div>
            </div>
          </div>
        </center>
      </section>
    </>
  );
};

export default Hero;
import bcbiboc from "../assets/bcbiboc.png";
import brosh1 from "../assets/brosh1.jpg";
import brosh2 from "../assets/brosh2.jpg";

const Boc = () => {
  return (
    <>
      <section className="section" id="boc">
        <article>
          <div className="container">
            <div className="column is-vcentered is-flex is-centered is-align-items-center">
              <div className="column is-5">
                <img src={bcbiboc} alt="bcbiboc" width={"300"} />
              </div>
              <div className="column">
                <h1 className="title content is-1 has-text-info has-text-shadow-black">
                  Brother of Christ of Banneux
                </h1>
              </div>
            </div>
            <figure className="image is-16by10">
              <img src={brosh1} alt="" />
            </figure>
            <figure className="image is-16by10">
              <img src={brosh2} alt="" />
            </figure>
          </div>
        </article>
      </section>
    </>
  );
};

export default Boc;

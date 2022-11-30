import aboutImg from "../assets/23.png";

const About = () => {
  return (
    <>
      <section className="section about-section center-content" id="about">
        <div className="section-heading">
          <h2 className="section-heading">about us</h2>
        </div>
        <div className="about-content">
          <div className="about-content-left">
            <ul>
              <li className="list">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam consequatur eum dolores? Et, voluptatibus dolorem?
              </li>
              <li className="list">Lorem ipsum dolor sit amet consectetur.</li>
              <li className="list">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi, quae.
              </li>
            </ul>
          </div>
          <div className="about-content-right">
            <img
              src={aboutImg}
              alt="about section image"
              className="sectionImg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

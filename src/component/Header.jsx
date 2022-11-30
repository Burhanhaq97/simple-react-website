import Nav from "./Nav";
import heroSectionImg from "../assets/12.webp";

const Header = () => {
  return (
    <>
      <header>
        <Nav />
        <section className="section hero-section">
          <div className="hero-section-content">
            <div className="hero-section-heading">
              <h1>
                best professional website design software development company
              </h1>
            </div>
            <div className="hero-section-para">
              <p>
                The fastest way to grow your business with the leader
                technology. Be authentic, In an overstated market it is vital to
                do things that make you and your services stand out.
              </p>
            </div>
            <div className="hero-section-btn">
              <a href="">contact us</a>
            </div>
          </div>

          <div className="hero-section-img">
            <img src={heroSectionImg} alt="Hero section image" />
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;

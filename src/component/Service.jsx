import ServiceCard from "./ServiceCard";
import img1 from "../assets/22.webp";
import img2 from "../assets/12.webp";
import img3 from "../assets/23.png";

const Service = () => {
  return (
    <>
      <section className="section service-section center-content" id="service">
        <div className="service-section-heading">
          <h2 className="section-heading">services</h2>
        </div>
        <div className="service-section-card">
          <ServiceCard heading="website design" img={img1} />
          <ServiceCard heading="bulk sms " img={img2} />
          <ServiceCard heading="payment gateways " img={img3} />
        </div>
      </section>
    </>
  );
};

export default Service;

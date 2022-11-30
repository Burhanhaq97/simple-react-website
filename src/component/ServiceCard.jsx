const ServiceCard = (props) => {
  return (
    <>
      <div className="service-card">
        <img src={props.img} alt="service card image" />
        <h3> {props.heading} </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          deserunt.
        </p>
      </div>
    </>
  );
};

export default ServiceCard;

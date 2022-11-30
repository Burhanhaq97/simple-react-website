import productImg from "../assets/55.png";

const product = () => {
  return (
    <>
      <section className="section product-section center-content" id="product">
        <div className="product-section-heading">
          <h2 className="section-heading">our products</h2>
        </div>
        <div className="product-content">
          <div className="product-img">
            <img
              src={productImg}
              alt="product section image"
              className="sectionImg"
            />
          </div>
          <div className="product-content-right">
            <ul>
              <li className="list">Lorem ipsum dolor sit Lorem, ipsum.</li>
              <li className="list">
                Lorem ipsum dolor sit amet consectetur adipisicing Lorem, ipsum.
              </li>
              <li className="list">Lorem ipsum dolor sit amet Lorem, ipsum.</li>
              <li className="list">Lorem, ipsum dolor Lorem, ipsum.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default product;

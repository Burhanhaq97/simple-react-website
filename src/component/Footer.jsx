import React from "react";

const Footer = () => {
  return (
    <>
      <footer  id="footer">
        <div className="footer-left">
          <h3>my website</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            nulla dolores, vitae praesentium quos repellat eligendi voluptate
            non dolor ea! Laboriosam nisi adipisci facere, ab reiciendis et
            consequuntur corrupti architecto ea molestias.
          </p>
        </div>

        <div className="footer-middle">
          <h3>contact us</h3>
          <p>Call Us : 1234-567-8910</p>
          <p>Email Us : abc123@example.com</p>
        </div>

        <div className="footer-right">
          <h3>subscribe to newsletter</h3>
          <form>
            <input type="text" placeholder="Enter Your Email" />
            <p>we'll never shear your email with anyone else.</p>
            <button>Submit</button>
          </form>
        </div>
      </footer>
    </>
  );
};

export default Footer;

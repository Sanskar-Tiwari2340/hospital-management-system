import PropTypes from "prop-types";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p className="sub-title">Biography</p>
          <h3>Who We Are</h3>
          <p>
            We are a dedicated team of healthcare professionals committed to providing exceptional medical care and services to our community. Our hospital combines modern technology with compassionate patient care to ensure the best outcomes for every individual.
          </p>
          <p className="highlight">Excellence in Healthcare Since 2024</p>
          <hr />
          <p>
            Our mission is to leverage cutting-edge technology to improve hospital operations, enhance patient experiences, and support our medical staff with intelligent tools. We believe in innovation, efficiency, and putting patients first in everything we do.
          </p>
          <hr />
          <p className="tagline">Your health is our priority!</p>
        </div>
      </div>
    </>
  );
};

Biography.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default Biography;

import React from "react";

const Footer = () => {
  return <footer>
    <div className="container-fluid bg-nav">
      <div className="row">
        <div className="col-12 text-center">
          <h6 className="text-white py-3">all &copy; 2024 - <span style={{
            color: "black",
            fontWeight: "bold"
          }}>GameMaster </span> - Andrea Manigrasso (React)</h6>
        </div>
      </div>
    </div>
  </footer>;
};

export default Footer;
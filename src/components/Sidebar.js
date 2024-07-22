import React from "react";
import { LinkComponent, SocialComponent } from "../utils/links";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { FaBars } from 'react-icons/fa';
import '../style/sidebar.scss';


const Sidebar = () => {


  return (
    <aside>
    <button className="btn-sidebar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
      <FaBars />
    </button>

    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header">
        <h5 className="title-offcanvas" id="offcanvasRightLabel">GameMaster</h5>
        <button className="close-btn" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
          <VscArrowSmallLeft />
        </button>
      </div>
      <hr style={{ background: "white", height: "3px", margin: "0" }} />
      <div className="offcanvas-body">
        <div className="my-5"  data-bs-dismiss="offcanvas" >
          <LinkComponent  />
        </div>
        <div>
          <SocialComponent />
        </div>
      </div>
    </div>
  </aside>
  );
};

export default Sidebar;

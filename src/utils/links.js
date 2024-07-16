import React from "react";
import '../style/navbar.scss'
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const links = [
  {
    url: "/",
    text: "Home",
    icon: <AiFillHome />,
  },
  {
    url: "/about",
    text: "Chi Siamo",
    icon: <RiTeamFill/>,
  },
  {
    url: "/contattaci",
    text: "Contattaci",
    icon: <AiFillMessage/>,
  },
];

const LinkComponent = ({ classLink }) => {
  return (
    <ul className={classLink}>
      {links.map((link) => {
        return (
          <Link key={link.text} to={link.url} className="link ms-5">
            <div className="d-flex align-items-center">
              <h6>{link.icon}</h6>
              <h5 className="mx-2">{link.text}</h5>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

const socialLink = [
  {
    url: "https://www.facebook.com/",
    icon: <FaFacebookSquare className="nav-icon" />,
  },
  {
    url: "https://twitter.com/home?lang=it",
    icon: <FaTwitterSquare className="nav-icon" />,
  },
  {
    url: "https://www.youtube.com/",
    icon: <FaYoutubeSquare className="nav-icon" />,
  },
];

const SocialComponent = () => {
  return (
    <ul style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      listStyle: "none",
      padding: "0",
      gap: "20px"
    }}>
      {socialLink.map((link) => {
        return (
          <li key={link.url} >
            <a href={link.url} alt={link.url}>
              {link.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export { LinkComponent, SocialComponent };
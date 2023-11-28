import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/Ajith31kumar/Formik-validation-and-dasboard.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <img
              alt="github"
              src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"
              width="30"
              height="30"
              style={{ marginRight: '10px' }}
            />
            Ajith Kumar K  
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

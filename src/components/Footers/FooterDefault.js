/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

// core components

function FooterDefault() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                  <Link
                      className="link footer-link"
                      tag={Link} to="/admi/login"
                      color="default">
                    Jarb29
                  </Link>
              </li>
              <li>
                <a
                color="default"
                
                >
                  Con Cariño
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright" color="default">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
            color="default"
            >
              Jarb29
            </a>
            . Coded by{" "}
            <a
            color="default"
          
            >
              Jarb29
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default FooterDefault;

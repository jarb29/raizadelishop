/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function FooterDefault() {
  return (
    <>
      <footer className="footer footer-default" >
        <Container>
          <nav>
            <ul>
              <li>
                    Jarb29
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
          <div className="copyright" id="copyright" color="black">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
            color="yellow"
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

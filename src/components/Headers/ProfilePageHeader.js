import React, { useContext }  from "react";
import { Context } from '../../AppContext';
import { withRouter } from "react-router";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader(props) {
  const { store } = useContext(Context);
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        //filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/profile.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        {store.currentUser?
        <Container>
            <h3 className="title">{store.currentUser.Usuario.nombre}, {store.currentUser.Usuario.apellido}</h3>
            <div className="social-description">
              <p className="category">{store.currentUser.Usuario.email}</p>
              <p className="category">{store.currentUser.Usuario.telefono}</p>
            </div>
        </Container>: null }
      </div>
    </>
  );
}

export default withRouter(ProfilePageHeader);

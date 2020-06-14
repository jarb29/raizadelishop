import React from "react";

import BasicForm from "./adminitrador-componentes/BasicForm";
import Tabs from "./adminitrador-componentes//Tabs.js";
import ContentAreas from "./adminitrador-componentes/ContentAreas.js";
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar.js";


function Administrador() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
    <FixedTransparentNavbar />
      <div className="wrapper">
        <div className="main">
          <BasicForm />
          <Tabs />
          <ContentAreas />
        </div>
      </div>
    </>
  );
}

export default Administrador;

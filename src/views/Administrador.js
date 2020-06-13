import React from "react";

import Basic from "./adminitrador-componentes/Basic";
import Tabs from "./adminitrador-componentes//Tabs.js";
import ContentAreas from "./adminitrador-componentes/ContentAreas.js";
import Javascript from "./adminitrador-componentes/Javascript.js";
import FileUploader from "./adminitrador-componentes/FileUploader.js";
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar.js";
import Modal from "./adminitrador-componentes/Modal";

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
          <Tabs />
          <Basic />
          <ContentAreas />
        </div>
      </div>
    </>
  );
}

export default Administrador;

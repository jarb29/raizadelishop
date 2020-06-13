import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import ImageUpload from "components/CustomUpload/ImageUpload.js";

function FileUploader() {
  return (
    <>
      <div id="file-uploader">
        <Container>
          <div className="title">
            <h4>Cargar Imagen</h4>
          </div>
          <Row>
            <Col md="3" sm="4">
              <h4>
                <small>Imagen</small>
              </h4>
              <ImageUpload avatar />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FileUploader;

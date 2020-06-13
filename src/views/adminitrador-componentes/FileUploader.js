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

            <Col md="3" sm="4">
              <h4>
                <small>Imagen</small>
              </h4>
              <ImageUpload avatar />
            </Col>

        </Container>
      </div>
    </>
  );
}

export default FileUploader;

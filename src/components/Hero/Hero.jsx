import "./Hero.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getImageUrl } from "../../utils";
import Button from "react-bootstrap/Button";
import myPdf from "../../../assets/cv.pdf";

export const Hero = () => {
  return (
    <section className="banner">
      <Container className="container">
        <Row className="row">
          <Col>
            <div className="titleHeading">
              <h6 className="subtitle">Looking for a Developer?</h6>
              <h1 className="heading"> I'm Bernadette Martillano</h1>
              <p className="description">
                I'm a highly skilled Frontend Developer with 6 years of
                experience in creating user-centric, high-performance web
                applications.
              </p>
            </div>
          </Col>
          <Col className="imageCol">
            <img
              src={getImageUrl("1.png")}
              alt="Hero image of me"
              className="heroImg"
            />
          </Col>
          <div>
            <Button className="buttons hireMe">Hire Me</Button>
            {/* <Button className="buttons downloadCv">Download CV</Button> */}
            <a href={myPdf} download="CV.pdf" className="downloadCv">
              Download CV
            </a>
          </div>
        </Row>
      </Container>
    </section>
  );
};

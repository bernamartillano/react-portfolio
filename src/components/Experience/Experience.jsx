import { Container } from "react-bootstrap";
import "./Experience.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Experience = () => {
  return (
    <section className="experience">
      <Container className="container">
        <Row className="row">
          <div className="workTitle">
            <div className="heading">
              <h4> Work Experience </h4>
            </div>
          </div>
        </Row>
        <Row>
          <VerticalTimeline className="timeline">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "#161d2d",
                border: "1px solid #e9ecef",
                textAlign: "left",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2021 - 2025"
              iconStyle={{
                background: "#8492a6",
                width: "20px",
                height: "20px",
                marginLeft: "-10px",
              }}
              dateClassName="date"
            >
              <h5 className="title">Frontend Developer</h5>
              <p className="company">Doehle Shipmanagement Phils Corp</p>
              <p className="summary">
                - Developed and maintained new and existing web applications
                using Angular 16+, RxJS, and REST API. <br />
                - Created unit tests using Jest to ensure application
                reliability. <br />- Collaborated with QA and UI/UX teams,
                working with Figma designs. <br />- Utilized Agile development
                approaches and conducted code reviews via Git.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "#161d2d",
                border: "1px solid #e9ecef",
                textAlign: "left",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2020 - 2021"
              iconStyle={{
                background: "#8492a6",
                width: "20px",
                height: "20px",
                marginLeft: "-10px",
              }}
              dateClassName="date"
            >
              <h5 className="title">Software Engineer</h5>
              <p className="company">InGeNio</p>
              <p className="summary">
                - Designed and optimized web interfaces using React, focusing on
                user experience and functionality. <br />
                - Developed and utilized a proprietary productivity platform for
                agile project management. <br />
                - Built e-commerce platforms in OpenCart and Shopify, including
                database integration and custom extensions. <br />- Managed
                project deployments on Amazon Web Services (AWS).
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "#161d2d",
                border: "1px solid #e9ecef",
                textAlign: "left",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2018 - 2019"
              iconStyle={{
                background: "#8492a6",
                width: "20px",
                height: "20px",
                marginLeft: "-10px",
              }}
              dateClassName="date"
            >
              <h5 className="title">Software Engineer</h5>
              <p className="company">SNAAAP</p>
              <p className="summary">
                - Designed and developed web applications using the Angular
                framework. <br />
                - Deployed projects and performed migrations in AWS
                environments. <br />- Built e-commerce websites using
                WooCommerce.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Row>
      </Container>
    </section>
  );
};

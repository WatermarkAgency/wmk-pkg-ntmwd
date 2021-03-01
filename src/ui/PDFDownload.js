import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { H4 } from "../typography";
import PropTypes from "prop-types";

const PDFImage = styled.img``;

const JoomlaPdfIcon = styled.div`
  background: url("${({ icon }) => icon}") 0 center no-repeat;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: url(${({ icon }) => icon});
  background-origin: padding-box;
  background-position-x: 0px;
  background-position-y: 50%;
  background-size: auto;
  color: rgb(31, 62, 79);
  display: block;
  font-size: 16px;
  height: 16px;
  line-height: 16px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 0px;
  padding-top: 0px;
  text-size-adjust: 100%;
`;

const JoomlaPdfLink = styled.div`
  display: block;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 16px;
  height: 16px;
  line-height: 25.6px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 5px;
  margin-top: 5px;
  padding-bottom: 3px;
  padding-left: 0px;
  padding-right: 5px;
  padding-top: 3px;
  text-size-adjust: 100%;
`;

const JoomlaAnchor = styled.a`
  color: rgb(56, 181, 230);
  cursor: pointer;
  display: inline;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 16px;
  height: auto;
  line-height: 16px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-decoration-color: rgb(56, 181, 230);
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: auto;
  text-size-adjust: 100%;
  transition: all 0.3s ease;
  :hover {
    color: rgb(132, 196, 71);
    text-decoration-color: rgb(132, 196, 71);
  }
`;

const DipraPdf = ({ image, title, link, heading, icon }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Row className="flex-column">
            {heading ? (
              <Col>
                <H4>{heading}</H4>
              </Col>
            ) : null}
            <Col>
              <a href={link} target="_self">
                <PDFImage src={image} alt={"PDF Download of " + title} />
              </a>
            </Col>
            <Col>
              <JoomlaPdfLink>
                <JoomlaPdfIcon icon={icon}>
                  <JoomlaAnchor href={link} target="_self">
                    {title}
                  </JoomlaAnchor>
                </JoomlaPdfIcon>
              </JoomlaPdfLink>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DipraPdf;

DipraPdf.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  heading: PropTypes.string,
  icon: PropTypes.string,
};

DipraPdf.defaultProps = {
  icon: "https://dipra.org/media/com_phocadownload/images/mime/16/icon-pdf.png",
};

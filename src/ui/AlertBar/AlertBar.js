import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AlertTriangle from "./AlertTriangle";
import styled from "styled-components";
import { PillButton } from "../Buttons/PillButton";
import { colors } from "../../vars/palette";

export const ALERT_BAR_BREAK = 992;

const Styled = {};
Styled.Alert = styled(Container)`
  background: ${colors.hex("milanoRed")};
  color: ${colors.hex("white")};
`;

Styled.AlertRow = styled(Row)`
  & > .col,
  & > .col-auto {
    padding: 0.25rem;
  }
`;

const AlertBar = ({ cta, children }) => {
  const [viewWidth, setViewWidth] = useState(0);
  const { to, target, text } = cta;
  const isMobile = viewWidth < ALERT_BAR_BREAK;
  useEffect(() => {
    const resize = () => {
      setViewWidth(window.innerWidth);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  });
  return (
    <Styled.Alert fluid>
      <Container>
        <Row>
          <Col xs={2} md={3}>
            <Styled.AlertRow>
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <AlertTriangle
                  style={{
                    //height: isMobile ? "30px" : "60px",
                    height: "36px",
                    fill: colors.hex("white"),
                    margin: isMobile ? "1vh" : 0,
                  }}
                />
              </Col>
              <Col
                xs="auto"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                {isMobile ? null : (
                  <span
                    style={{
                      fontSize: isMobile ? "1rem" : "2rem",
                      fontFamily: `"DIN Alternate", sans-serif`,
                    }}
                  >
                    ALERT
                  </span>
                )}
              </Col>
            </Styled.AlertRow>
          </Col>
          <Col
            xs={8}
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: `"DIN Alternate", sans-serif`,
              textTransform: "uppercase",
              fontSize: isMobile ? ".75rem" : "1.25rem",
              textAlign: "center",
            }}
          >
            {children}
          </Col>
          <Col xs={2} md={3} style={{ display: "flex", alignItems: "center" }}>
            <PillButton
              to={to}
              target={target}
              tracking={{
                event: "alert_bar_click",
                params: { alert_bar_text: children },
              }}
            >
              {text ? text : isMobile ? "More" : "Read More"}
            </PillButton>
          </Col>
        </Row>
      </Container>
    </Styled.Alert>
  );
};

export default AlertBar;

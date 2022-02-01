import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: ${(props) => props.wrap || "no-wrap"};
  justify-content: ${(props) => props.justify || "start"};
  align-items: ${(props) => props.align || "start"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background-size: ${(props) => props.backgroundSize || "cover"};
  background: ${(props) => props.background};
  background-image: url(${(props) => props.bgimg});
  background-repeat: no-repeat;
  border-radius: ${(props) => props.radius};
  box-shadow: ${(props) => props.shadow};
  z-index: ${(props) => props.z || "0"};
  position: ${(props) => props.position};
  }
`;

export const Flex = (props) => {
  return <StyledFlex {...props} />;
};

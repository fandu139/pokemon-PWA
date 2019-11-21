// @flow
import * as React from "react";
import styled from "styled-components";
import theme from "../../config/styleConst";

const StyledCard = styled.div`
  border: solid 1px ${theme.colors.gray_light_alt};
  border-radius: 5px;
  overflow: hidden;
  background-color: ${theme.colors.white_1};
  margin-bottom: 8px;
`;

/**
 * @param {React.Node} props.children
 * @return {React.Node}
 */
function Card({ children, ...props }) {
  return <StyledCard {...props}>{children}</StyledCard>;
}

export default Card;

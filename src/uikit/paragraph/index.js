// @flow
import * as React from "react";
import theme from "../../config/styleConst";
import styled from "styled-components";

/**
 * @param  {Boolean} props.warning
 * @param  {Boolean} props.danger
 * @param  {String} props.fontColor
 * @return {String | Void}
 */
const setFontColor = ({ warning, danger, fontColor }) => {
  if (warning) return `color: ${theme.colors.orange};`;
  if (danger) return `color: ${theme.colors.red};`;
  return `color: ${fontColor};`;
};

const StyledParagraph = styled.p`
  padding: ${props => (props.padding ? props.padding : 0)};
  margin: ${props => (props.margin ? props.margin : 0)};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  text-align: ${props => props.textAlign};

  ${props => setFontColor(props)}
`;

/**
 * @param  {React.Node | String | React.Element<any>} props.children
 * @return {React.Node}
 */
export default function Paragraph({ children, ...otherProps }) {
  return <StyledParagraph {...otherProps}>{children}</StyledParagraph>;
}

Paragraph.defaultProps = {
  fontWeight: 400,
  fontSize: "12dp",
  fontColor: `${theme.colors.black}`,
  textAlign: "left",
  warning: false,
  danger: false
};

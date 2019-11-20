// @flow
import * as React from "react";
import styled from "styled-components";
import theme from "../../config/styleConst";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => theme.colors.white_1};
  height: 3.125rem;
  border-top: solid 1px ${props => theme.colors.gray_light_alt};
  padding: 0.3125rem 0.625rem;
  z-index: ${props => theme.zIndex.footer};
  font-weight: normal;
`;

/**
 * @param {String} variant
 * @param {String} keyword
 * @param {Object} notifications
 * @return {React.Node}
 */
function Footer({ variant, keyword, notifications }) {
  return (
    <StyledFooter data-testid="footer-component">{notifications}</StyledFooter>
  );
}

Footer.defaultProps = {
  variant: "default",
  keyword: "",
  notificatons: {
    transactions: 0,
    cart: 0,
    chat: 0
  }
};

export default Footer;

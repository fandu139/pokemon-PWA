// @flow
import * as React from "react";
import styled from "styled-components";
import theme from "../../config/styleConst";
import Flex from "../../uikit/flex";
import ButtonCostum from "../../uikit/button"
import IFRender from "../../lib/ifrender";

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

const StyledFlex = styled(Flex)`
  > * {
    flex: 1;
  }

  > *:first-child {
    margin-right: ${('4dp', 'px')};
  }

  > *:last-child {
    margin-left: ${('4dp', 'px')};
  }
`

/**
 * @param {String} variant
 * @param {String} keyword
 * @param {Object} notifications
 * @return {React.Node}
 */
function Footer({ variant, keyword, notifications, dataFilter, data, setData, category, setCategory }) {

  function groubArray(data){
    let concatArray = [...new Set(data)];
    return concatArray
  }
  
  function concatDataArray(data){
    let concatArray = []; 
    data.map( item => {
      concatArray = concatArray.concat(item.types)
    })
  
    return groubArray(concatArray)
  }

  function handleCategory(){
    setCategory(concatDataArray(data))
  }

  function handleRemoveCategory(){
    setData(dataFilter)
    setCategory('')
  }

  return (
    <StyledFooter data-testid="footer-component">
      <StyledFlex justifyContent="space-between" alignItems="center">
        <IFRender
          condition={category === ''}
          ifComponent={
            <ButtonCostum typeVarian="success" press={() => handleCategory()} titleButton={"Filter By Type Pokemon"}/>
          }
          elseComponent={
            <ButtonCostum typeVarian="error" press={() => handleRemoveCategory()} titleButton={"Remove Filter"}/>
          }
        />
      </StyledFlex>
    </StyledFooter>
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

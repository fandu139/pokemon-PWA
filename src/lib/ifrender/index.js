// @flow
import * as React from "react";

/**
 * @param  {Boolean} props.condition
 * @param  {React.Node | React.Element<any>} props.ifComponent
 * @param  {React.Node | React.Element<any> | Null} props.elseComponent
 * @return {React.Node | React.Element<any> | Null}
 */
const ConditionalRendering = ({ condition, ifComponent, elseComponent }) => {
  return (
    <React.Fragment>{condition ? ifComponent : elseComponent}</React.Fragment>
  );
};

ConditionalRendering.defaultProps = {
  elseComponent: null
};

export default ConditionalRendering;

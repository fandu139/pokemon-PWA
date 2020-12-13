import React from "react";
import ButtonCostum from "../../uikit/button"
import Flex from "../../uikit/flex";

export function getFilterData({ item, setData, dataFilter }){
  const baseArray = [];

  // eslint-disable-next-line array-callback-return
  dataFilter.map(itemData => {
    const checkData = itemData.types.includes(item)
    if(checkData){
      baseArray.push(itemData)
    }
  })
  return setData(baseArray)
}

function Filter({ dataCategory, setData, dataFilter }) {

  return (
    <Flex justifyContent="space-evenly" flexWrap="wrap">
      {
        dataCategory.map((item, key) => 
          <ButtonCostum key={key} press={() => getFilterData({ item, setData, dataFilter })} typeVarian="success" titleButton={item}/>
        )
      }
    </Flex>
  );
}

export default Filter;

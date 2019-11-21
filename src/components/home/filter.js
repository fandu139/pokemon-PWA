import React from "react";
import ButtonCostum from "../../uikit/button"
import Flex from "../../uikit/flex";

function Filter({ dataCategory, data, setData, press, dataFilter, setDataFilter }) {

  function getFilterData(item){
    const baseArray = [];

    dataFilter.map(itemData => {
      const checkData = itemData.types.includes(item)
      if(checkData){
        baseArray.push(itemData)
      }
    })
    setData(baseArray)
  }

  return (
    <Flex justifyContent="space-evenly" flexWrap="wrap">
      {
        dataCategory.map((item, key) => 
          <ButtonCostum key={key} press={() => getFilterData(item)} typeVarian="success" titleButton={item}/>
        )
      }
    </Flex>
  );
}

export default Filter;

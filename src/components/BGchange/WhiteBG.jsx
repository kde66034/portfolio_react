import React from 'react'

const dataSet = {
  dataColor: "#ffffff"
};

const WhiteBG = ({children}) => {
    return (
      <div id="backColor white panel" data-color={dataSet.dataColor}>{children}</div>
    );
  }

export default WhiteBG
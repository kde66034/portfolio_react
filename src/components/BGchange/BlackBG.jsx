import React from 'react'

const dataSet = {
    dataColor: "#0B130D"
};

const BlackBG = ({children}) => {
    return (
      <div id="backColor black panel" data-color={dataSet.dataColor}>{children}</div>
    );
  }

export default BlackBG
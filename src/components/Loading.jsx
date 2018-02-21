import React from 'react';

const Loading = () => {
  return (<div className="col-8  text-center">
    <img
      src={require('../utils/Loading_icon.gif')}
      alt="loading"
      height="75"
      width="75"
    />
  </div>
  );
};

export default Loading;

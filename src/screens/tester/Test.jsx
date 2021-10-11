import React, { useState } from 'react';

const Test = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((dt) => !dt);
  };

  console.log(active ? 'active' : 'not Active');
  return <div onClick={handleClick}>testing react</div>;
};

export default Test;

import React from 'react';

const Avatar = ({ name }) => {
  console.log(name);
  return (
    <img
      className="rounded-circle"
      src={`https://ui-avatars.com/api/?size=128&font-size=0.36&background=random&rounded=true&name=${name}`}
      alt="..."
    />
  );
};

export default Avatar;

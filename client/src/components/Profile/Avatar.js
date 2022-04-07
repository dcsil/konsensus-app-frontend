import React from 'react';

const Avatar = ({ name, url }) => {

  if (url) {
    return (
      <img
        src={url}
        alt={name}
        className="rounded-circle"
      />
    );
  }

  return (
    <img
      className="rounded-circle"
      src={`https://ui-avatars.com/api/?size=128&font-size=0.36&background=random&rounded=true&name=${name}`}
      alt={name}
    />
  );
};

export default Avatar;

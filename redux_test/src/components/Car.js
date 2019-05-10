import React from 'react';

export default ({ car: { model, mark,year, color, owner, _id }, onDelete }) => {
  return (
    <div>
      <h2>{ model }</h2>
      <p>{ mark }</p>
      <p>{ year }</p>
      <p>{ color }</p>
      <p>{ owner }</p>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)}>
        Remove
      </button>
    </div>
  );
};
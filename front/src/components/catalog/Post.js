import React from 'react';

const styles = {
    borderBottom: '2px solid #eee',
    background: '#fafafa',
    margin: '.75rem auto',
    padding: '.6rem 1rem',
    maxWidth: '500px',
    borderRadius: '7px'
};

export default ({ post: { model, mark, _id, year, color, owner }, onDelete }) => {
    return (
        <div style={ styles }>
            <h2> { model } </h2>
            <p> { mark } </p>
            <p> { year } </p>
            <p> { color } </p>
            <p> { owner } </p>
            <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)}>
                Remove
            </button>
        </div>
    );
};

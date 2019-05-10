import React from 'react';
import { connect } from 'react-redux';
import Car from '../components/Car';
import { deleteCar } from '../actions';

function CarList({ cars, onDelete }) {
  if(!cars.length) {
    return (
      <div>
        No Posts cd
      </div>
    )
  }
  return (
    <div>
      {cars.map(car => {
        return (
          <Car car={ car } onDelete={ onDelete } key={ car._id } />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cars: state.cars
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteCar(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarList);
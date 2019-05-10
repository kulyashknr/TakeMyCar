import { connect } from 'react-redux';
import { createCar } from '../actions';
import NewPost from '../components/NewPost';

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: car => {
      dispatch(createCar(car));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewPost);
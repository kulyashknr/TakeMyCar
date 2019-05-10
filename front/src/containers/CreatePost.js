import { connect } from 'react-redux';
import { createPost } from '../actions';
import NewPost from '../components/catalog/NewPost';

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => {
            dispatch(createPost(post));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(NewPost);

import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/catalog/Post';
import { deletePost } from '../actions';

function PostList({ posts, onDelete }) {
    console.log(posts);
    if(!posts.length) {
        return (
            <div>
                No Posts
            </div>
        )
    }
    return (
        <div>
            {posts.map(post => {
                console.log(post);
                return (
                    <Post post={ post } onDelete={ onDelete } key={ post._id } />
                );
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => {
            dispatch(deletePost(id));
            window.location.reload();
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);

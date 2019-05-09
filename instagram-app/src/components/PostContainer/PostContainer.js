import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';


class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                {console.log('PostContainer says:', this.props.post.imageUrl)}
                <img src={this.props.post.imageUrl} />
                {/* ^ this returns the images from props */}
                <strong>{this.props.post.username}</strong>
                <CommentSection comments={this.props.post.comments}/>
            </div>
        )
    }
}

PostContainer.propTypes = {
    post: PropTypes.object
};

export default PostContainer;

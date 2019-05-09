import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';


class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0

        }
    }

    incrementLikes = () => {
        this.setState({ likes: this.state.likes + 1 })
    }
    
    render() {
        const hasLikes = !!this.state.likes;
        const iconClasses = hasLikes ? "fas fa-heart" : "far fa-heart";

        return (
            <div>
                <img src={this.props.post.imageUrl} />
                <span>
                    <i className={iconClasses} onClick={this.incrementLikes}></i>
                    {this.state.likes}
                </span>
                <strong>{this.props.post.username}</strong>
                <CommentSection comments={this.props.post.comments} />
            </div>
        )
    }
}

PostContainer.propTypes = {
    post: PropTypes.object
};

export default PostContainer;

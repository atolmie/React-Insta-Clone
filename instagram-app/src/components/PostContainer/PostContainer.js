import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                
                <strong>{this.props.post.username}</strong>
                <CommentSection comments={this.props.post.comments}/>
                
                
            </div>
        )
    }
}

export default PostContainer;
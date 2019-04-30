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
                {this.props.post.comments.map(comment => {
                    return <CommentSection comment={comment}/>
                })}
            </div>
        )
    }
}

export default PostContainer;
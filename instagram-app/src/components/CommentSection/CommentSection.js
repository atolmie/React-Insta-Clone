import React from 'react';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                {this.props.comment.text}
            </div>
        )
    }
}

export default CommentSection;
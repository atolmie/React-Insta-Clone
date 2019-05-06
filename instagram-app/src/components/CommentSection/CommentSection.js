import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={e => console.warn(e.target.value)}/>
                {this.props.comments.map(comment => {
                    return <Comment key={comment.id} comment={comment} />
                })}

            </div>

        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.array
};

export default CommentSection;
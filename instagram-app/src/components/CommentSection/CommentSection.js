import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', comments: [] };
    }


    componentDidMount() {
        this.setState({ comments: this.props.comments })
    }

    addNewComment = (e) => {
        console.warn(e)
    }

    handleInputChange = (e) => {
        this.setState({ value: e.target.value })
    }

    handleAddComment = (e) => {
         

        this.setState({ comments: [...this.state.comments, { text: this.state.value }] })
        this.setState({ value: '' })

    }


    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleInputChange} />
                {this.state.comments.map(comment => {
                    return <Comment key={comment.id} comment={comment} />
                })}
                <button onClick={this.handleAddComment}> post comment</button>
            </div>

        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.array
};

export default CommentSection;


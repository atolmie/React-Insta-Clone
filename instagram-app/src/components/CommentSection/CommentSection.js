import React from 'react';
import Comment from './Comment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        
    }
    render() {
        return (
            <div>
                
                <input type="text" value={this.state.value}  />
                {this.props.comments.map(comment => {
                    return <Comment comment={comment}/>
                })}
           
            </div>
            
        )
    }
}

export default CommentSection;
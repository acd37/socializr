import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

class CommentFeed extends Component {
    render() {
        const { comments, postId } = this.props;

        return comments.map(comment => (
            <div className="container">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <CommentItem
                            key={comment._id}
                            comment={comment}
                            postId={postId}
                        />
                    </div>
                </div>
            </div>
        ));
    }
}

CommentFeed.propTypes = {
    comments: PropTypes.array.isRequired,
    postId: PropTypes.string.isRequired
};

export default CommentFeed;

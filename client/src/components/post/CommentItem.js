import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteComment } from '../../actions/postActions';

class CommentItem extends Component {
    onDeleteClick = (postId, commentId) => {
        this.props.deleteComment(postId, commentId);
    };

    render() {
        const { comment, postId, auth } = this.props;

        return (
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-1">
                        <a href="profile.html">
                            <img
                                className="rounded-circle d-none d-md-block"
                                src={comment.avatar}
                                alt="avatar"
                            />
                        </a>
                    </div>
                    <div className="col-md-11">
                        <p className="text-muted">{comment.name}</p>
                        <p>{comment.text}</p>
                        {comment.user === auth.user.id ? (
                            <i
                                onClick={this.onDeleteClick.bind(
                                    this,
                                    postId,
                                    comment._id
                                )}
                                className="fas fa-trash delete-icon absolute-icon"
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

CommentItem.propTypes = {
    deleteComment: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { deleteComment }
)(CommentItem);

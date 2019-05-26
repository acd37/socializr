import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../../actions/profileActions';

class BookShelf extends Component {
    onDeleteClick = id => {
        this.props.deleteBook(id);
    };

    render() {
        const bookshelf = this.props.bookshelf.map(book => (
            <div key={book._id} style={{ maxWidth: 100 }}>
                <p
                    style={{ cursor: 'pointer', marginBottom: 0, fontSize: 11 }}
                    className="text-muted text-center"
                    onClick={this.onDeleteClick.bind(this, book._id)}
                >
                    <small>(delete)</small>
                </p>
                <img src={book.thumbnail} alt="thumbnail" />
                <p className="text-center book-title">{book.title}</p>
                <p className="text-center book-text">{book.author}</p>

                <p className="text-center">
                    {/*                 
                { for(var i = 0; i < 4; i++) {
                    // {book.averageRating}
                } */}
                </p>
            </div>
        ));

        return (
            <div>
                <h4 className="mb-4">Bookshelf</h4>
                <div className="bookshelf">{bookshelf}</div>
            </div>
        );
    }
}

BookShelf.propTypes = {
    deleteBook: PropTypes.func.isRequired
};

export default connect(
    null,
    { deleteBook }
)(BookShelf);

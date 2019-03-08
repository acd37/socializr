import React, { Component } from 'react';

class ProfileBookshelf extends Component {
    render() {
        const bookshelf = this.props.bookshelf.map(book => (
            <div key={book._id} style={{ maxWidth: 100 }}>
                <img src={book.thumbnail} />
                <p className="text-center book-title">{book.title}</p>
                <p className="text-center book-text">{book.author}</p>
                <p className="text-center">{book.averageRating}</p>
            </div>
        ));

        return (
            <div className="mt-4">
                <h4 className="mb-4">Bookshelf</h4>
                <div className="bookshelf">{bookshelf}</div>
            </div>
        );
    }
}

export default ProfileBookshelf;

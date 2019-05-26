import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../../actions/profileActions';
import $ from 'jquery';

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            publisher: '',
            publishedDate: '',
            description: '',
            isbn10: '',
            isbn13: '',
            pageCount: '',
            averageRating: '',
            thumbnail: '',
            searchParameter: '',
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onSubmit = e => {
        e.preventDefault();

        const bookData = {
            title: this.state.title,
            author: this.state.author,
            publisher: this.state.publisher,
            publishedDate: this.state.publishedDate,
            description: this.state.description,
            isbn10: this.state.isbn10,
            isbn13: this.state.isbn13,
            pageCount: this.state.pageCount,
            averageRating: this.state.averageRating,
            thumbnail: this.state.thumbnail
        };

        this.props.addBook(bookData, this.props.history);
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleBookSearch = e => {
        e.preventDefault();

        const searchQuery = this.state.searchParameter;

        var settings = {
            async: true,
            crossDomain: true,
            url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${searchQuery}`,
            method: 'GET',
            headers: {
                'cache-control': 'no-cache'
            }
        };

        $.ajax(settings).done(
            function (data) {
                console.log(data);

                if (data.totalItems > 0) {
                    let bookObj = {};

                    // cycle through the data and validate
                    data.items[0].volumeInfo.title
                        ? (bookObj.title = data.items[0].volumeInfo.title)
                        : (bookObj.title = '');
                    data.items[0].volumeInfo.authors[0]
                        ? (bookObj.author = data.items[0].volumeInfo.authors[0])
                        : (bookObj.author = '');
                    data.items[0].volumeInfo.publisher
                        ? (bookObj.publisher =
                            data.items[0].volumeInfo.publisher)
                        : (bookObj.publisher = '');
                    data.items[0].volumeInfo.publishedDate
                        ? (bookObj.publishedDate =
                            data.items[0].volumeInfo.publishedDate)
                        : (bookObj.publishedDate = '');
                    data.items[0].volumeInfo.description
                        ? (bookObj.description =
                            data.items[0].volumeInfo.description)
                        : (bookObj.description = '');
                    data.items[0].volumeInfo.industryIdentifiers[1]
                        ? (bookObj.isbn10 =
                            data.items[0].volumeInfo.industryIdentifiers[1].identifier)
                        : (bookObj.isbn10 = '');
                    data.items[0].volumeInfo.industryIdentifiers[0].identifier
                        ? (bookObj.isbn13 =
                            data.items[0].volumeInfo.industryIdentifiers[0].identifier)
                        : (bookObj.isbn13 = '');
                    data.items[0].volumeInfo.pageCount
                        ? (bookObj.pageCount = data.items[0].volumeInfo.pageCount.toString())
                        : (bookObj.pageCount = '');
                    data.items[0].volumeInfo.averageRating
                        ? (bookObj.averageRating = data.items[0].volumeInfo.averageRating.toString())
                        : (bookObj.averageRating = '');
                    data.items[0].volumeInfo.imageLinks.smallThumbnail
                        ? (bookObj.smallThumbnail =
                            data.items[0].volumeInfo.imageLinks.smallThumbnail)
                        : (bookObj.smallThumbnail = '');

                    this.setState({
                        title: bookObj.title,
                        author: bookObj.author,
                        publisher: bookObj.publisher,
                        publishedDate: bookObj.publishedDate,
                        description: bookObj.description,
                        isbn10: bookObj.isbn10,
                        isbn13: bookObj.isbn13,
                        pageCount: bookObj.pageCount,
                        averageRating: bookObj.averageRating,
                        thumbnail: bookObj.smallThumbnail
                    });
                } else {
                    console.log('No book found.');
                }
            }.bind(this)
        );
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="add-book">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/dashboard" className="btn btn-light">
                                Go Back
                            </Link>
                            <h1 className="display-4 text-center">Add Book</h1>
                            <p className="lead text-center">
                                Add books to your bookshelf
                            </p>
                            <h3> Search </h3>

                            <TextFieldGroup
                                placeholder="ISBN-10 or ISBN-13..."
                                name="searchParameter"
                                value={this.state.searchParameter}
                                onChange={this.onChange}
                            />
                            <button
                                onClick={this.handleBookSearch}
                                className="btn btn-primary mb-4"
                            >
                                Search
                            </button>
                            <h3> Details </h3>
                            <small className="d-block pb-3">
                                * = required field
                            </small>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    placeholder="* Title"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.onChange}
                                    error={errors.title}
                                />
                                <TextFieldGroup
                                    placeholder="* Author"
                                    name="author"
                                    value={this.state.author}
                                    onChange={this.onChange}
                                    error={errors.author}
                                />
                                <TextFieldGroup
                                    placeholder="Publisher"
                                    name="publisher"
                                    value={this.state.publisher}
                                    onChange={this.onChange}
                                    error={errors.publisher}
                                />
                                <TextFieldGroup
                                    placeholder="Published Date"
                                    name="publishedDate"
                                    value={this.state.publishedData}
                                    onChange={this.onChange}
                                    error={errors.publishedData}
                                />
                                <TextFieldGroup
                                    placeholder="* ISBN-10"
                                    name="isbn10"
                                    value={this.state.isbn10}
                                    onChange={this.onChange}
                                    error={errors.isbn10}
                                />
                                <TextFieldGroup
                                    placeholder="* ISBN-13"
                                    name="isbn13"
                                    value={this.state.isbn13}
                                    onChange={this.onChange}
                                    error={errors.isbn13}
                                />
                                <TextFieldGroup
                                    placeholder="* Page Count"
                                    name="pageCount"
                                    value={this.state.pageCount}
                                    onChange={this.onChange}
                                    error={errors.pageCount}
                                />
                                <TextFieldGroup
                                    placeholder="* Average Rating"
                                    name="averageRating"
                                    value={this.state.averageRating}
                                    onChange={this.onChange}
                                    error={errors.averageRating}
                                />
                                <TextFieldGroup
                                    placeholder="* Thumbnail"
                                    name="thumbnail"
                                    value={this.state.thumbnail}
                                    onChange={this.onChange}
                                    error={errors.thumbnail}
                                />
                                <TextAreaFieldGroup
                                    placeholder="* Book Description"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.onChange}
                                    error={errors.description}
                                />
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="btn btn-primary btn-block"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddBook.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    addBook: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { addBook }
)(withRouter(AddBook));

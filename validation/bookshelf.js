const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEducationInput(data) {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : '';
    data.author = !isEmpty(data.author) ? data.author : '';
    data.description = !isEmpty(data.description) ? data.description : '';
    data.isbn10 = !isEmpty(data.isbn10) ? data.isbn10 : '';
    data.isbn13 = !isEmpty(data.isbn13) ? data.isbn13 : '';
    data.pageCount = !isEmpty(data.pageCount) ? data.pageCount : '';
    data.averageRating = !isEmpty(data.averageRating) ? data.averageRating : '';
    data.thumbnail = !isEmpty(data.thumbnail) ? data.thumbnail : '';

    if (validator.isEmpty(data.title)) {
        errors.title = 'Title field is required.';
    }

    if (validator.isEmpty(data.author)) {
        errors.author = 'Author field is required.';
    }

    if (validator.isEmpty(data.isbn10)) {
        errors.isbn10 = 'ISBN-10 field is required.';
    }

    if (validator.isEmpty(data.isbn13)) {
        errors.isbn13 = 'ISBN-13 field is required.';
    }

    if (validator.isEmpty(data.pageCount)) {
        errors.pageCount = 'Page count field is required.';
    }

    if (validator.isEmpty(data.averageRating)) {
        errors.averageRating = 'Average rating field is required.';
    }

    if (validator.isEmpty(data.thumbnail)) {
        errors.thumbnail = 'Thumbnail rating field is required.';
    }

    if (validator.isEmpty(data.description)) {
        errors.description = 'Description field is required.';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

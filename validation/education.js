const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEducationInput(data) {
    let errors = {};

    data.school = !isEmpty(data.school) ? data.school : '';
    data.degree = !isEmpty(data.degree) ? data.degree : '';
    data.field = !isEmpty(data.field) ? data.field : '';
    data.from = !isEmpty(data.from) ? data.from : '';

    if (validator.isEmpty(data.school)) {
        errors.school = 'School field is required.';
    }

    if (validator.isEmpty(data.degree)) {
        errors.degree = 'Degree field is required.';
    }

    if (validator.isEmpty(data.field)) {
        errors.field = 'Field of study is required.';
    }

    if (validator.isEmpty(data.from)) {
        errors.from = 'From field is required.';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

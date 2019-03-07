import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEducation } from '../../actions/profileActions';

class AddEducation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: '',
            degree: '',
            field: '',
            from: '',
            to: '',
            current: false,
            description: '',
            errors: {},
            disabled: false
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

        const eduData = {
            school: this.state.school,
            degree: this.state.degree,
            field: this.state.field,
            from: this.state.from,
            to: this.state.to,
            current: this.state.current,
            description: this.state.description
        };

        this.props.addEducation(eduData, this.props.history);
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onCheck = e => {
        this.setState({
            disabled: !this.state.disabled,
            current: !this.state.current
        });
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="add-education">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/dashboard" className="btn btn-light">
                                Go Back
                            </Link>
                            <h1 className="display-4 text-center">
                                Add Education
                            </h1>
                            <p className="lead text-center">
                                Add any education that you have had in the past
                                or is current.
                            </p>
                            <small className="d-block pb-3">
                                * = required field
                            </small>

                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup
                                    placeholder="* School/University"
                                    name="school"
                                    value={this.state.school}
                                    onChange={this.onChange}
                                    error={errors.school}
                                />
                                <TextFieldGroup
                                    placeholder="* Degree/Certification"
                                    name="degree"
                                    value={this.state.degree}
                                    onChange={this.onChange}
                                    error={errors.degree}
                                />
                                <TextFieldGroup
                                    placeholder="* Field of Study"
                                    name="field"
                                    value={this.state.field}
                                    onChange={this.onChange}
                                    error={errors.field}
                                />
                                <h6>* From </h6>
                                <TextFieldGroup
                                    name="from"
                                    type="date"
                                    value={this.state.from}
                                    onChange={this.onChange}
                                    error={errors.from}
                                />
                                <h6>To </h6>
                                <TextFieldGroup
                                    name="to"
                                    type="date"
                                    value={this.state.to}
                                    onChange={this.onChange}
                                    error={errors.to}
                                    disabled={
                                        this.state.disabled ? 'disabled' : ''
                                    }
                                />
                                <div className="form-check mb-4">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="current"
                                        value={this.state.current}
                                        checked={this.state.current}
                                        onChange={this.onCheck}
                                        id="current"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="current"
                                    >
                                        I currently attend here
                                    </label>
                                </div>
                                <TextAreaFieldGroup
                                    placeholder="Program Description"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.onChange}
                                    error={errors.description}
                                    info="Tell us about the program"
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

AddEducation.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    addEducation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { addEducation }
)(withRouter(AddEducation));

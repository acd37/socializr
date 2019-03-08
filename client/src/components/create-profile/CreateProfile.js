import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySocialInputs: false,
            handle: '',
            company: '',
            website: '',
            location: '',
            status: '',
            skills: '',
            githubUsername: '',
            bio: '',
            twitter: '',
            facebook: '',
            linkedin: '',
            youtube: '',
            instagram: '',
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();

        const profileData = {
            handle: this.state.handle,
            company: this.state.company,
            website: this.state.website,
            location: this.state.location,
            status: this.state.status,
            skills: this.state.skills,
            bio: this.state.bio,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            youtube: this.state.youtube,
            instagram: this.state.instagram
        };

        this.props.createProfile(profileData, this.props.history);
    };

    render() {
        const { errors, displaySocialInputs } = this.state;

        let socialInputs;

        if (displaySocialInputs) {
            socialInputs = (
                <div>
                    <InputGroup
                        placeholder="Twitter Profile URL"
                        name="twitter"
                        icon="fab fa-twitter"
                        value={this.state.twitter}
                        onChange={this.onChange}
                        error={errors.twitter}
                    />
                    <InputGroup
                        placeholder="Facebook Profile URL"
                        name="facebook"
                        icon="fab fa-facebook"
                        value={this.state.facebook}
                        onChange={this.onChange}
                        error={errors.facebook}
                    />
                    <InputGroup
                        placeholder="LinkedIn Profile URL"
                        name="linkedin"
                        icon="fab fa-linkedin"
                        value={this.state.linkedin}
                        onChange={this.onChange}
                        error={errors.linkedin}
                    />
                    <InputGroup
                        placeholder="YouTube Profile URL"
                        name="youtube"
                        icon="fab fa-youtube"
                        value={this.state.youtube}
                        onChange={this.onChange}
                        error={errors.youtube}
                    />
                    <InputGroup
                        placeholder="Instagram Profile URL"
                        name="instagram"
                        icon="fab fa-instagram"
                        value={this.state.instagram}
                        onChange={this.onChange}
                        error={errors.instagram}
                    />
                </div>
            );
        }

        // select options for status
        const options = [
            {
                label: '* Select professional status',
                value: 0
            },
            {
                label: 'Editor',
                value: 'Editor'
            },
            {
                label: 'Senior Editor',
                value: 'Senior Editor'
            },
            {
                label: 'Author',
                value: 'Author'
            },
            {
                label: 'Other',
                value: 'Other'
            }
        ];

        return (
            <div className="create-profile">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">
                            {' '}
                            Create your Profile
                        </h1>
                        <p className="lead text-center">
                            Let's get some information to make your profile
                            stand out.
                        </p>
                        <small className="d-block pb-3">
                            * = required fields.
                        </small>

                        <form onSubmit={this.onSubmit}>
                            <TextFieldGroup
                                placeholder="* Profile Handle"
                                name="handle"
                                value={this.state.handle}
                                onChange={this.onChange}
                                error={errors.handle}
                                info="A unique handle for your profile."
                            />
                            <SelectListGroup
                                placeholder="Status"
                                name="status"
                                value={this.state.status}
                                onChange={this.onChange}
                                error={errors.status}
                                options={options}
                                info="What are you up to right now?"
                            />
                            <TextFieldGroup
                                placeholder="Company"
                                name="company"
                                value={this.state.company}
                                onChange={this.onChange}
                                error={errors.company}
                                info="Who are you working for."
                            />
                            <TextFieldGroup
                                placeholder="Website"
                                name="website"
                                value={this.state.website}
                                onChange={this.onChange}
                                error={errors.website}
                            />
                            <TextFieldGroup
                                placeholder="Location"
                                name="location"
                                value={this.state.location}
                                onChange={this.onChange}
                                error={errors.location}
                            />
                            <TextFieldGroup
                                placeholder="* Skills"
                                name="skills"
                                value={this.state.skills}
                                onChange={this.onChange}
                                error={errors.skills}
                                info="Please use comma separated values (i.e. Editing, Proofreading, Copyrighting)"
                            />
                            <TextAreaFieldGroup
                                placeholder="Short biography"
                                name="bio"
                                value={this.state.bio}
                                onChange={this.onChange}
                                error={errors.bio}
                                info="Tell us a little about yourself."
                            />

                            <div className="mb-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        this.setState(prevState => ({
                                            displaySocialInputs: !prevState.displaySocialInputs
                                        }));
                                    }}
                                    className="btn btn-light"
                                >
                                    Add Social Network Links
                                </button>
                                <span className="text-muted">Optional</span>
                            </div>
                            {socialInputs}
                            <input
                                type="submit"
                                value="Submit"
                                className="btn btn-primary btn-block mt-4"
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { createProfile }
)(withRouter(CreateProfile));

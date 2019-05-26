import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import { getCurrentProfile } from '../../actions/profileActions';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handle: ''
        };
    }

    componentDidMount() {
        this.props.getCurrentProfile();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.profile.profile) {
            this.setState({
                handle: nextProps.profile.profile.handle
            });
        }
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.clearCurrentProfile();
        this.props.logoutUser();
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const { handle } = this.state;

        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/profiles">
                        {' '}
                        Book Nerds
                                </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/feed">
                        Feed
                                </Link>
                </li>
                <li className="nav-item dropdown">
                    <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        {handle}{' '}
                        <img
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            style={{ width: 25, marginRight: 5 }}
                            className="rounded-circle"
                            src={user.avatar}
                            alt={user.name}
                            title="You must have a gravatar connected to your email to display an image"
                        />
                    </a>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                    >
                        <a
                            href="#"
                            onClick={this.onLogoutClick}
                            className="dropdown-item"
                        >
                            Logout
                        </a>
                        <Link className="dropdown-item" to="/dashboard">
                            Dashboard
                        </Link>
                    </div>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">
                        Sign Up
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Socializr
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#mobile-nav"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">

                        </ul>

                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(
    mapStateToProps,
    { logoutUser, clearCurrentProfile, getCurrentProfile }
)(Navbar);

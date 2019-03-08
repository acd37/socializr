import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
    return (
        <div className="row mb-4">
            <div className="col-md-3">
                <Link
                    to="/edit-profile"
                    className="btn btn-light btn-block mb-1"
                >
                    <i className="fas fa-user-circle mr-1" /> Edit Profile
                </Link>
            </div>
            <div className="col-md-3">
                <Link
                    to="/add-experience"
                    className="btn btn-light btn-block mb-1"
                >
                    <i className="fab fa-black-tie mr-1" />
                    Add Experience
                </Link>
            </div>
            <div className="col-md-3">
                <Link
                    to="/add-education"
                    className="btn btn-light btn-block mb-1"
                >
                    <i className="fas fa-graduation-cap mr-1" />
                    Add Education
                </Link>
            </div>
            <div className="col-md-3">
                <Link to="/add-book" className="btn btn-light btn-block mb-1">
                    <i className="fas fa-book-open mr-1" />
                    Add Book
                </Link>
            </div>
        </div>
    );
};

export default ProfileActions;

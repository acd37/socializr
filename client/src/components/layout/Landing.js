import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className="landing">
            <div className="dark-overlay landing-inner text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-3 mb-4">Socializr</h1>
                            <p className="lead">
                                {' '}
                                Create a book nerd profile/portfolio, share
                                posts and socialize with other book nerds.
                            </p>
                            <hr />
                            <Link
                                to="/register"
                                className="btn btn-lg btn-info mr-2"
                            >
                                Sign Up
                            </Link>
                            <Link to="/login" className="btn btn-lg btn-light">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;

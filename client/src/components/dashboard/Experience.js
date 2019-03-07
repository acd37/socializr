import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profileActions';

class Experience extends Component {
    onDeleteClick = id => {
        this.props.deleteExperience(id);
    };

    render() {
        const experience = this.props.experience.map(expItem => (
            <tr key={expItem._id}>
                <td>{expItem.company}</td>
                <td>{expItem.title}</td>
                <td>
                    <Moment format="YYYY/MM/DD">{expItem.from}</Moment> -{' '}
                    {expItem.to === null ? (
                        'current'
                    ) : (
                        <Moment format="YYYY/MM/DD">{expItem.to}</Moment>
                    )}
                </td>
                <td>
                    {/* <button
                        onClick={this.onDeleteClick.bind(this, expItem._id)}
                        className="btn btn-outline-danger"
                    > */}
                    <i className="fas fa-trash delete-icon" />
                    {/* </button> */}
                </td>
            </tr>
        ));

        return (
            <div>
                <h4 className="mb-4">Experience</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Title</th>
                            <th>Years</th>
                            <th />
                        </tr>
                        {experience}
                    </thead>
                </table>
            </div>
        );
    }
}

Experience.propTypes = {
    deleteExperience: PropTypes.func.isRequired
};

export default connect(
    null,
    { deleteExperience }
)(Experience);

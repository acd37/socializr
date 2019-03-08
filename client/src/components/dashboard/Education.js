import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profileActions';

class Education extends Component {
    onDeleteClick = id => {
        this.props.deleteEducation(id);
    };

    render() {
        const education = this.props.education.map(eduItem => (
            <tr key={eduItem._id}>
                <td>{eduItem.school}</td>
                <td>{eduItem.degree}</td>
                <td>{eduItem.field}</td>
                <td>
                    <Moment format="YYYY/MM/DD">{eduItem.from}</Moment> -{' '}
                    {eduItem.to === null ? (
                        'current'
                    ) : (
                        <Moment format="YYYY/MM/DD">{eduItem.to}</Moment>
                    )}
                </td>
                <td>
                    <i className="fas fa-trash delete-icon" />
                </td>
            </tr>
        ));

        return (
            <div>
                <h4 className="mb-4">Education</h4>
                <table className="table  table-sm">
                    <thead>
                        <tr>
                            <th>School</th>
                            <th>Degree</th>
                            <th>Field</th>
                            <th>Years</th>
                            <th />
                        </tr>
                        {education}
                    </thead>
                </table>
            </div>
        );
    }
}

Education.propTypes = {
    deleteEducation: PropTypes.func.isRequired
};

export default connect(
    null,
    { deleteEducation }
)(Education);

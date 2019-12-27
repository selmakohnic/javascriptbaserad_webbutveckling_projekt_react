import React, { Component } from 'react';
import AdminItem from './AdminItem';
import PropTypes from 'prop-types';

//Skriver ut alla resor (components)
class AdminTravel extends Component {
    render() {
        return this.props.travels.map((travel) => (
            <AdminItem key={travel._id} travel={travel} openUpdateModal={this.props.openUpdateModal} deleteTravel={this.props.deleteTravel} />
        ));
    }
}

//PropTypes för validering av attribut som en component har 
AdminTravel.propTypes = {
    travels: PropTypes.array.isRequired
}

export default AdminTravel

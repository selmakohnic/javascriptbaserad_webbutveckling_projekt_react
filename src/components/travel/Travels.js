import React, { Component } from 'react';
import TravelItem from './TravelItem';
import PropTypes from 'prop-types';

//Skriver ut alla resor (components)
class Travels extends Component {
    render() {
        return this.props.travels.map((travel) => (
            <TravelItem key={travel._id} travel={travel} />
        ));
    }
}

//PropTypes för validering av attribut som en component har 
Travels.propTypes = {
    travels: PropTypes.array.isRequired
}

export default Travels;

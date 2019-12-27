import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Skapar en ny component för varje resa
export class AdminItem extends Component {
    render() {
        //Variabler med data
        const { _id, image, country, city, date, description } = this.props.travel;
        //Returnerar en bild, land, stad, datum och en beskrivning för varje resa i tabellform
        return (
            <tr>
                <td>{country}</td>
                <td>{city}</td>
                <td>{date}</td>
                <td>{description}</td>
                <td>{image}</td>
                <td onClick={id => this.props.openUpdateModal(_id)}><i className="fas fa-edit"></i></td>
                <td onClick={this.props.deleteTravel.bind(this, _id)}><i className="fas fa-trash-alt"></i></td>
            </tr>
        );
    }
}

//PropTypes för validering av attribut som en component har 
AdminItem.propTypes = {
    travel: PropTypes.object.isRequired
}

export default AdminItem

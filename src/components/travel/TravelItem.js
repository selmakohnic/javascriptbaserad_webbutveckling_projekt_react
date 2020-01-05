import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Skapar en ny component för varje resa
export class TravelItem extends Component {
    render() {
        //Variabler med data
        const { image, country, city, date, description } = this.props.travel;

        //Returnerar en bild, land, stad, datum och en beskrivning för varje resa
        return (
            <div className="travelCon slideanim">
                <img src={"/images/" + image} alt={"Semesterbild från " + city + ", " + country} title={"Semesterbild från " + city + ", " + country} />
                <section>
                    <h3>{country}</h3>
                    <p><i className="fas fa-map-marker-alt"></i>{city}, {country}</p>
                    <p><i className="fas fa-clock"></i>{date}</p>
                    <p>{description}</p>
                </section>
            </div>
        );
    }
}

//PropTypes för validering av attribut som en component har 
TravelItem.propTypes = {
    travel: PropTypes.object.isRequired
}

export default TravelItem;

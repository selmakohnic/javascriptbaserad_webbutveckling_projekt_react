import React, { Component } from 'react'

export class AddTravel extends Component {
    state = {
        country: "",
        city: "",
        date: "",
        description: "",
        image: ""
    }

    //Hanterar data som skrivs in i inmatningsfälten
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTravel(this.state.country, this.state.city, this.state.date, this.state.description, this.state.image);
        this.setState({
            country: "",
            city: "",
            date: "",
            description: "",
            image: ""
        });
    }

    //Hanterar uppdatering av inmatning i inmatningsfälten
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3><i className="fas fa-globe-americas"></i>Lägg till en resa</h3>
                <p>Land: <br />
                    <input
                        type="text"
                        className="inputField"
                        name="country"
                        required
                        value={this.state.country}
                        onChange={this.onChange}
                    />
                </p>

                <p className="inputRight">Stad <br />
                    <input
                        type="text"
                        className="inputField"
                        name="city"
                        required
                        value={this.state.city}
                        onChange={this.onChange}
                    />
                </p>

                <p>Datum <br />
                    <input
                        type="text"
                        className="inputField"
                        name="date"
                        required
                        value={this.state.date}
                        onChange={this.onChange}
                    />
                </p>

                <p className="inputRight">Bild (använd spanien.jpg för att få upp en bild)<br />
                    <input
                        type="text"
                        className="inputField"
                        name="image"
                        required
                        value={this.state.image}
                        onChange={this.onChange}
                    />
                </p>

                <p>Beskrivning <br />
                    <textarea rows="6" className="inputField" name="description" required value={this.state.description} onChange={this.onChange}></textarea>
                </p>

                <p>
                    <input
                        type="submit"
                        id="btn"
                        value="Lägg till"
                    />
                </p>
            </form>
        );
    }
}

export default AddTravel

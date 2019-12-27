import React from 'react'

//Formulär med inmatningsfält som är fyllda med den resas värden som valts för uppdatering
function UpdateTravel(props) {
    return (
        <form onSubmit={(event) => props.updateTravel(event)}>
            <h3><i className="fas fa-edit"></i>Uppdatera en resa</h3>
            <p>Land: <br />
                <input
                    type="text"
                    className="inputField"
                    name="country"
                    required
                    value={props.updatedItem.country}
                    onChange={(event) => props.updateItemFields(event.target.name, event.target.value)}
                />
            </p>

            <p className="inputRight">Stad <br />
                <input
                    type="text"
                    className="inputField"
                    name="city"
                    required
                    value={props.updatedItem.city}
                    onChange={(event) => props.updateItemFields(event.target.name, event.target.value)}
                />
            </p>

            <p>Datum <br />
                <input
                    type="text"
                    className="inputField"
                    name="date"
                    required
                    value={props.updatedItem.date}
                    onChange={(event) => props.updateItemFields(event.target.name, event.target.value)}
                />
            </p>

            <p className="inputRight">Bild <br />
                <input
                    type="text"
                    className="inputField"
                    name="image"
                    required
                    value={props.updatedItem.image}
                    onChange={(event) => props.updateItemFields(event.target.name, event.target.value)}
                />
            </p>

            <p>Beskrivning <br />
                <textarea rows="6" className="inputField" name="description" required value={props.updatedItem.description}
                    onChange={(event) => props.updateItemFields(event.target.name, event.target.value)}></textarea>
            </p>

            <p>
                <input
                    type="submit"
                    id="btn"
                    value="Spara"
                />
            </p>
        </form>
    )
}

export default UpdateTravel;
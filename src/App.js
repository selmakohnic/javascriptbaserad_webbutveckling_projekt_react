//React och router
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
//Resorna
import Travels from './components/travel/Travels';
import AdminTravel from './components/admin/AdminTravel';
import AddTravel from './components/admin/AddTravel';
import UpdateTravel from './components/admin/UpdateTravel';
//HTTP-operatorerna
import axios from 'axios';
//Stilmall
import './App.css';

class App extends Component {
  state = {
    travels: [],
    isUpdating: false,
    updatedItem: {
      country: '',
      city: '',
      date: '',
      description: '',
      image: ''
    }
  };

  //Hämtar resorna
  componentDidMount() {
    //Hämtar resorna från REST-webbtjänsten så att de sedan kan användas på olika sätt.
    axios.get('http://localhost:3001/api/travels/')
      .then(response => {
        this.setState({ travels: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  //Lägger till en resa med det inmatade innehållet. Därefter läses resorna in igen för att visa den nya resan som lagts till.
  addTravel = (country, city, date, description, image) => {
    axios.post('http://localhost:3001/api/travels/add', {
      country,
      city,
      date,
      description,
      image
    })
      .then(res => {
        //Hämtar alla resor igen
        axios.get('http://localhost:3001/api/travels/')
          .then(response => {
            this.setState({ travels: response.data });
          })
          .catch(function (error) {
            console.log(error);
          });
      });
  }

  //Del av uppdatering
  updateItemFields = (name, value) => {
    this.setState(prevState => {
      return {
        updatedItem: {
          ...prevState.updatedItem,
          [name]: value
        }
      };
    });
  };

  //Visar formuläret för uppdatera då användaren klickat på den ikonen
  openUpdateModal = id => {
    // Visa modal
    this.setState({ isUpdating: true });

    // Hämta ut data för resan
    const travel = this.state.travels.find(travel => travel._id === id);
    this.setState({ updatedItem: travel });
  }

  //Uppdaterar en resa
  updateTravel = event => {
    event.preventDefault();

    axios.put(`http://localhost:3001/api/travels/update/${this.state.updatedItem._id}`, {
      country: this.state.updatedItem.country,
      city: this.state.updatedItem.city,
      date: this.state.updatedItem.date,
      description: this.state.updatedItem.description,
      image: this.state.updatedItem.image
    })
      .then(res => {
        //Hämtar alla resor igen
        axios.get('http://localhost:3001/api/travels/')
          .then(response => {
            this.setState({ travels: response.data });
          })
          .catch(function (error) {
            console.log(error);
          });
      });
  }

  //Raderar en resa
  deleteTravel = (id) => {
    if (window.confirm('Är du säker på att du vill ta bort resan?')) {
      //Anrop till REST-webbtjänsten för att radera en resa. Därefter läses resorna in igen utan den raderade.
      axios.delete(`http://localhost:3001/api/travels/delete/${id}`)
        .then(res => {
          //Hämtar alla resor igen
          axios.get('http://localhost:3001/api/travels/')
            .then(response => {
              this.setState({ travels: [...response.data.filter(travel => travel.id !== id)] });
            })
            .catch(function (error) {
              console.log(error);
            });
        });
    }
  }

  render() {

    //Uppdatering
    let updateModal = <UpdateTravel updatedItem={this.state.updatedItem} updateTravel={this.updateTravel} updateItemFields={this.updateItemFields} />;

    if (!this.state.isUpdating) {
      updateModal = null;
    }

    return (
      <Router>
        <div className="App">
          {/*Headern*/}
          <Header />

          {/*Startsidan*/}
          <Route exact path="/" render={props => (
            <React.Fragment>
              {/*Utskrift av resorna*/}
              <div id="wrapper">
                <Travels travels={this.state.travels} />
              </div>
            </React.Fragment>
          )} />

          {/*Adminsidan*/}
          <Route path="/admin" render={props => (
            <div id="wrapperAdmin" className="slideanim">
              <table>
                <thead>
                  <tr>
                    <th>Land</th>
                    <th>Stad</th>
                    <th>Datum</th>
                    <th>Beskrivning</th>
                    <th>Bild</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody id="aboutOutput">
                  {/*Utskrift av resorna, redigering i form utav uppdatera och ta bort*/}
                  <AdminTravel travels={this.state.travels} openUpdateModal={(id) => this.openUpdateModal(id)} updateTravel={this.updateTravel} deleteTravel={this.deleteTravel} />
                </tbody>
              </table>

              {/*Uppdatera en resa*/}
              {updateModal}

              {/*Lägga till en resa*/}
              <AddTravel addTravel={this.addTravel} />
            </div>
          )} />

          {/*Footern*/}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCity } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
  handleSelectionLocation = (city) => {
    /* this.setState({city}); */
    this.props.setCity(city);
    /* console.log(`handleSelectionLocation ${city}`); */
  }

  render() {
    return(
      <div>
        <LocationList cities = {this.props.cities}
        onSelectedLocation={this.handleSelectionLocation}>
        </LocationList>
      </div>
    )
  }
}

/* ESTA FUNCION DEJA TRABAJAR CON LAS ACCIONES */
const mapDispatchToPropsActions = (dispatch) => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);
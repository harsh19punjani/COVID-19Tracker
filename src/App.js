import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import { Grid } from '@material-ui/core';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>

          {/* <img className={styles.image} src={image} alt="COVID-19" /> */}
          {/* <Cards data={data} /> */}
          <CountryPicker handleCountryChange={this.handleCountryChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Chart data={data} country={country} />
        </Grid>


      </Grid>

    );
  }
}

export default App;
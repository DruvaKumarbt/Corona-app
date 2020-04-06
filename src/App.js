import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import * as Icon from 'react-feather';

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
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 

        <footer className="fadeInUp" style={{animationDelay: '2s'}}>
            <a
                  href="https://github.com/DruvaKumarbt/Corona-app.git"
                  className="button github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon.GitHub />
                  <span>Open Sourced on GitHub</span>
                </a>
                <div className = {styles.bottomright}>
                <p>Created by : Druva Kumar &copy;</p>
                <a href="mailto:druvakumar.bt@gmail.com">druvakumar.bt@gmail.com</a>
                </div>
                
                
    

      </footer>
      </div>

        
    );
  }
}

export default App;
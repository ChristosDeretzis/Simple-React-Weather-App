import axios from 'axios';
import React, {Component} from 'react'
import './App.css';
import Card from './components/Card/Card';
import Loader from './components/Loader/Loader';
import Error from './containers/Error/Error';
import Header from './containers/Header/Header';
import Preview from './containers/Preview/Preview';
import SearchBar from './containers/SearchBar/SearchBar';
import WeatherDetails from './containers/WeatherDetails/WeatherDetails';

class App extends Component {
  state = {
    searchBarInput: "",
    weatherDetails: {
      temperature: null,
      description: ''
    },
    loading: false,
    error: false
  }

  searchBarHandler = (e) => {
    this.setState({
      searchBarInput: e.target.value
    });
  }

  resetHandler = () => {
    this.setState({
      searchBarInput: '',
      weatherDetails: {},
      error: false
    });
  }  

  setWeather = () => {
    const city = this.state.searchBarInput;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
    const CITY_URL = BASE_URL + `?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(CITY_URL)
    this.setState({
      weatherDetails: {},
      loading: true,
      error: false
    }, () => {
      axios.get(CITY_URL)
        .then(res => {
          if(res.data.cod === 200){
            this.setState({
              weatherDetails: {
                temperature: res.data.main.temp,
                description: res.data.weather[0].main
              },
              loading: false
            });
          } else {
            throw res.data.cod
          }
        }).catch(err => {
          this.setState({
            loading: false,
            error: true
          });
        });
    });
  }

  render() {
    let cardContent = <Preview />;
    if(this.state.loading) {
      cardContent = <Loader />
    } else if(this.state.error) {
      cardContent = <Error onClickHandler={this.resetHandler} /> 
    } else if(this.state.weatherDetails.temperature && this.state.weatherDetails.description !== ''){
      cardContent = <WeatherDetails data={this.state.weatherDetails} /> 
    }

    return (
      <div className="AppWrapper">
        <Header onClickListener={this.resetHandler}/>
        <main className="AppMain">
        <SearchBar
          value={this.state.searchBarInput}
          onChangeHandler={this.searchBarHandler}
          onClickHandler={this.setWeather}
          error={this.state.error} />
          <Card>
            {cardContent} 
          </Card>
        </main>
      </div>
    );
  }
}

export default App;

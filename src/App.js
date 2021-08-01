import React, {Component} from 'react'
import './App.css';
import Card from './components/Card/Card';
import Loader from './components/Loader/Loader';
import Header from './containers/Header/Header';
import SearchBar from './containers/SearchBar/SearchBar';

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


  setWeather = () => {
    console.log("Hello")
  }

  render() {
    return (
      <div className="AppWrapper">
        <Header />
        <main className="AppMain">
        <SearchBar
          value={this.state.searchBarInput}
          onChangeHandler={this.searchBarHandler}
          onClickHandler={this.setWeather}
          error={this.state.error} />
          <Card>
            <Loader /> 
          </Card>
        </main>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import WeatherForecast from './WeatherForecast';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      city: '',
      url: '',
      data1: '',
      data2: '',
      data3:'',
      blank: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      city: this.state.input,
      url: this.state.blank.concat("https://api.openweathermap.org/data/2.5/weather?q=", this.state.input, "&appid=ba4eac3926cb7d59a3b93b6cd25a2bee"),
      input: '',
    });
    console.log(this.state.url, 'url')
    console.log(this.state.city, 'submit')
    console.log(this.state.input, 'input')    
  }


  render() {
    let data = fetch(this.state.url).then((resp) => {
      resp.json().then((res) => {
        this.setState({
          data1: res.weather,
          data2: res.main,
          data3: res.wind
        })
      })
    })
    return (
      <div className="body">
        <div className="quote-box">
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.input}
              onChange={this.handleChange}
              placeholder="Enter the city ..." />
            <button type='submit'>
              Search
            </button>
          </form>

          <WeatherForecast city={this.state.city} data1={this.state.data1} data2={this.state.data2} data3={this.state.data3} />
        </div>
      </div>
    );
  }
};


export default App;



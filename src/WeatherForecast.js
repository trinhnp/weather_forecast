import React from 'react';


class WeatherForecast extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    };
  render() {    
    return (
      <div>
    {this.props.url}
        {this.props.data1 ?
          this.props.data1.map((item) =>
            <div>
              <img src={`http://openweathermap.org/img/w/${item.icon}.png`} alt="icon"/>              
              <p> <b>City: </b> {this.props.city}</p>
              <p> <b>Weather: </b> {item.main} , {item.description}</p>
              <p> <b>Temperature:</b> {parseFloat(this.props.data2.temp-273.15).toFixed(0)} C </p>
              <p> <b>Humidity: </b> {this.props.data2.humidity} %</p>
              <p> <b>Wind: </b>{this.props.data3.speed} mps </p>              
            </div>)
          :
          <p></p>
        }
      </div >
    )
  }
}

export default WeatherForecast




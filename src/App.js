import React, { Component } from "react";
import LCC from "lightning-container";
import Selector from "./Selector";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rawData: [],
      isLoaded: false,
      num: 5
    };
    this.callApex = this.callApex.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoaded: false });
    setTimeout(() => {
      this.setState({ isLoaded: true });
      this.callApex();
    }, 1500);
  }

  callApex() {
    LCC.callApex("reactController.hello", this.state.num, this.handleResponse, {
      escape: true
    });
  }

  handleResponse(result, event) {
    if (event.status) {
      this.setState({ rawData: result });
    } else {
      console.log(event.message + " : " + event.where);
    }
  }

  render() {
    return (
      <div>
        <h1> Oktana Asset Charts</h1>
       {this.state.isLoaded ? <Selector rawData = {this.state.rawData} /> : <div className="spinner"></div>}
      </div>
    );
  }
}

export default App;

/* 
class App extends Component {
  state = { 
    device: null,
    country: null,
    chartData: null
  }

  onDeviceChange = e => this.setState({ device: e.target.value })
  onCountryChange = e => this.setState({ country: e.target.value })

  render () {
    return <div>
      <Selector onChange={this.onDeviceChange} />
      <Selector onChange={this.onCountryChange} />
      <Chart data={this.state.chartData}/>
      <h1>Device: {this.state.device}</h1>
      <h1>Countty: {this.state.country}</h1>
    </div>
  }
}

class Selector extends Component {
  state = {
    options: ['Teclado', 'Mouse'],
    selected: null
  }

  render () {
    return <select onChange={this.props.onChange()}>
      <option>{map}</option>
    </select>
  }
} */

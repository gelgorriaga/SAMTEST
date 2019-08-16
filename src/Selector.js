import React, { Component } from 'react';
import Chart from './Chart';
import './Selector.css';


class Selector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            chartType: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    render() {
        const renderChart = (this.state.chartType !== '' && this.state.country!== '')? <Chart country={this.state.country} chartType={this.state.chartType} rawData={this.props.rawData}/> : <div></div>;
        return (
            <div>
                
                <div className="Selector">

                    <form>

                        <div>
                            <label htmlFor="chartVersion">Device: </label>
                            <select value={this.state.chartType} onChange={this.handleChange} name="chartType">
                                <option value="" selected disabled >Choose here</option>
                                <option value="Unassigned Peripheral Chart">Unassigned peripherals</option>
                                <option value="Computer Chart">Computers</option>
                                <option value="Mobile Phone Chart">Mobile phones</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="country">Country: </label>
                            <select value={this.state.country} onChange={this.handleChange} name="country">
                                <option value="" selected disabled >Choose here</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Uruguay">Uruguay</option>
                            </select>
                        </div>


                    </form>
                </div>

                <div style={{ width: 400, height: 250, margin: "5vw 35vw" }}>
                    {renderChart}
                </div>

            </div>
        );
    }
}
export default Selector;
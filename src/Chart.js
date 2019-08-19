import React, { Component } from 'react';
import { Doughnut} from 'react-chartjs-2';

export class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rawData: this.props.rawData,
            labels: ['', '', ''],
            dataLabel:[1, 1, 1],

        }
        this.fetchData = this.fetchData.bind(this);
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState) {
        if ((prevProps.country === this.props.country )&& (prevProps.chartType===this.props.chartType ) || this.props.chartType==='' || this.props.country==='' ) {
            return;
        }
        this.fetchData();
    
    }
    fetchData(){
        let text = this.props.rawData;
        if (!text) {
            return;
        }
        try {
            let x = text.toString().replace(/&quot;/g, '\"');
            //x = x.replace(/\s/g, "");
            // x = x.replace(/\_/g, " ");
            x = JSON.parse(x);
            let countrySelected = this.props.country;
            
            console.log('=>', x.country[countrySelected])

                x.country[countrySelected].forEach(assetType => {
                    if (assetType.asset === 'Computer' && this.props.chartType === 'Computer Chart') {
                        let labels = Object.keys(assetType);
                        labels = labels.filter(label => label !== 'asset');
                        let dataLabel = []
                        labels.forEach(value => {
                            if(assetType[value] !== "Computer")
                                dataLabel.push(assetType[value]);
                        });
                                
                        this.setState({ labels, dataLabel });
                    }
                
                });

                x.country[countrySelected].forEach(assetType => {
                    if (assetType.asset === 'Mobile_Phone' && this.props.chartType === 'Mobile Phone Chart') {
                        let labels = Object.keys(assetType);
                        labels = labels.filter(label => label !== 'asset');
                        let dataLabel = []
                        labels.forEach(value => {
                            if(assetType[value] !== "Mobile_Phone")
                                dataLabel.push(assetType[value]);
                        });
    
                        this.setState({ labels, dataLabel });
                    }
                
                });

                x.country[countrySelected].forEach(assetType => {
                    if (assetType.asset === 'Unassigned_Peripherals' && this.props.chartType === 'Unassigned Peripheral Chart') {
                        let labels = Object.keys(assetType);
                        labels = labels.filter(label => label !== 'asset');
                        let dataLabel = []
                        labels.forEach(value => {
                            if(assetType[value] !== "Unassigned_Peripherals")
                                dataLabel.push(assetType[value]);
                        });
    
                        this.setState({ labels, dataLabel });
                    }
                
                });
          
            
        } catch (error) {
            console.log(`Parsing error:`, error);
        }
    }
    render() {
        return (
            <div className="Chart">
                <Doughnut
                data={{
                    labels: this.state.labels,
                    datasets: [
                        {
                            label: `${this.props.chartType}`,
                            data: this.state.dataLabel,
                            backgroundColor: [
                                'rgba(236, 238, 133, 0.4)',
                                'rgba(255,89,0,0.4)',
                                'rgba(0,104,255,0.4)',
                                'rgba(2,153,134,0.4)',
                                'rgba(171,111,39,0.4)',
                                'rgba(201,113,220,0.4)',
    
                            ]
                        }
                    ]
                }}
                width={200}
                height={200}
                options={{title: {
                    display: true,
                    text: `${this.props.country} ${this.props.chartType}`,
                    fontSize: 25,
                    fontColor: "#fff",
                    position: 'top',
                    responsive: true,
                    maintainAspectRatio: false,
                    responsive: false
                },
                legend: {
                    display: true,
                    position: 'top',
                    fontColor: "#fff",
                    labels: {
                        display: true,
                        fontColor: "#fff",
                        'fontSize': 8,
                        boxWidth: 5,
                        borderWidth: 0

                    }
                }}}
            />
            </div>
        )
    }
}

export default Chart

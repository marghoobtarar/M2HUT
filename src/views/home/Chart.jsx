import React, { Component } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

//   getDataUri() {
//     ApexCharts.exec("basic-bar", "dataURI").then(({ imgURI }) => {
//       console.log(imgURI);
//     });
//   }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>

        {/* <button onClick={this.getDataUri}>Get DATAURI</button> */}
      </div>
    );
  }
}

export default Charts;

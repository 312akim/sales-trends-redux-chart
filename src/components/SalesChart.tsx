import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import DUMMYDATA from '../DUMMYDATA.json';

function SalesChart() {
    const options = {
        title: {
          text: 'Sales Chart',
        },
        series: [{
            type: 'bar',
            name: 'Product Price',
            data: DUMMYDATA.map(item => item.productPrice),
            
        },
        {   
            type: 'bar',
            name: 'Product Cost',
            data: DUMMYDATA.map(item => item.productCost)
        }],
        chart: {
            zoomType: 'x',
            panning: true,
            panKey: 'shift'
        },
        xAxis: {
            title: {
                text: 'Index'
            }
        },
        yAxis: {
            title: {
                text: 'Dollar Value'
            }
        }
    }

    return (
        <div style={styles.wrapper}>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
}

const styles = {
    wrapper: {
        margin: '0 20%',
    }
}

export default SalesChart;
/**
 * Created by kalksever on 2016-11-09.
 */

'use strict';

var outsideDivAppend = d3.select('#outside-chart')
    .append('div')
    .attr('class','outside-chart');

var outsideChartDiv = outsideDivAppend.node();

var generateOutsideChart = function() {
    var To = {
        //x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
        //y: [1, 3, 6],
        // x: date,
        // y: To,
        x: [],
        y: [],
        name: 'To',    //Temperatura na zewnatrz
        mode: 'lines'
    };

    var outsideData = [To];

    var outsideLayout = {
        title: 'Temperatura na zewnątrz',
        legend: {
            x: 1,
            y: 1
        },
        yaxis: {
            title: 'Temperatura'
        }
    };

    Plotly.newPlot(outsideChartDiv, outsideData, outsideLayout);
};
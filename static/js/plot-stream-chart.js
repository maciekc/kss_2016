/**
 * Created by kalksever on 2016-10-21.
 */

'use strict';

var streamDivAppend = d3.select('#stream-chart')
    .append('div')
    .attr('class','stream-chart');

var streamChartDiv = streamDivAppend.node();

var generateStreamChart = function() {
    var heatStream = {
        //x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
        //y: [1, 3, 6],
        // x:date,
        // y:Tzm1,
        x: [],
        y: [],
        name: 'Tzm',    //Strumień wody opuszczający główny zawór
        mode: 'lines'
    };

    var streamData = [heatStream];

    var streamLayout = {
        title: 'Strumień wody opuszczający główny zawór',
        legend: {
            x: 1,
            y: 1
        },
        yaxis: {
            title: 'Strumień wody [m3/h]'
        }
    };

    Plotly.newPlot(streamChartDiv, streamData, streamLayout);
};
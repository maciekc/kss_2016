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
        x: [],
        y: [],
        name: 'Fzm',    //Strumień wody opuszczający główny zawór
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
            title: 'Strumień wody [t/h]'
        }
    };

    Plotly.newPlot(streamChartDiv, streamData, streamLayout);
};
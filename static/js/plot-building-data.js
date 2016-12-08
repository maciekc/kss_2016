/**
 * Created by kalksever on 2016-10-21.
 */

'use strict';

var buildingDivAppend = d3.select('#building-chart')
    .append('div')
    .attr('class','building-chart');

var buildingChartDiv = buildingDivAppend.node();

var generateBuildingChart = function() {

    var interiorTemp = {
        x: [],
        y: [],
        name: 'Tr1',     //Temperatura budynku
        mode: 'lines'
    };

    var heatingTemp = {
        x: [],
        y: [],
        name: 'Th1',     //Temperatura kaloryferów
        mode: 'lines'
    };

    var buildingLayout = {
        title: 'Temperatury w budynku 1',
        legend: {
            x: 1,
            y: 1
        },
        yaxis: {
            title: 'Temperatura [°C]'
        }
    };


    var buildingData = [interiorTemp, heatingTemp];

    Plotly.newPlot(buildingChartDiv, buildingData, buildingLayout);
};
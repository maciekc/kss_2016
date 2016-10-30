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
        //x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
        //y: [1, 3, 0],
		x:date,
		y:Tr1,
        name: 'Tr',     //Temperatura budynku
        mode: 'lines'
    };

    var heatingTemp = {
        //x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
        //y: [4, 2, 9],
		x:date,
		y:Th1,
        name: 'Th',     //Temperatura kaloryferów
        mode: 'lines'
    };

    var buildingLayout = {
        title: 'Temperatury w budynku x',
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
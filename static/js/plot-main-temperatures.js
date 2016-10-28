/**
 * Created by kalksever on 2016-10-21.
 */

'use strict';

var d3 = Plotly.d3;

var mainDivAppend = d3.select('#main-chart')
    .append('div')
    .attr('class','main-chart');

var mainChartDiv = mainDivAppend.node();

var generateMainChart = function() {
    var Tzm = {
        x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
        y: [1, 3, 6],
        name: 'Tzm',    //Temperatura wody z elektrociepłowni
        mode: 'lines'
    };

    var Tpm = {
        x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
        y: [4, 2, 9],
        name: 'Tpm',    //Temperatura wody powrotnej
        mode: 'lines'
    };

    var Tzco = {
        x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
        y: [3, 3, 0],
        name: 'Tzco',   //Temperatura wody wypływającej z wymiennika do budynków
        mode: 'lines'
    };

    var Tpco = {
        x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
        y: [8, 3, 5],
        name: 'Tpco',   //Temperatura wody po powrocie z budynków (Tpco)
        mode: 'lines'
    };

    var mainData = [Tzm, Tpm, Tzco, Tpco];

    var mainLayout = {
        title: 'Temperatury w głównym wymienniku ciepła',
        legend: {
            x: 1,
            y: 1
        },
        yaxis: {
            title: 'Temperatura [°C]'
        }
    };


    Plotly.newPlot(mainChartDiv, mainData, mainLayout);
};
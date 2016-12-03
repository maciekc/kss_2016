/**
 * Created by kalksever on 2016-10-21.
 */

'use strict';

var mainDivAppend = d3.select('#main-chart')
    .append('div')
    .attr('class','main-chart');

var mainChartDiv = mainDivAppend.node();

var generateMainChart = function() {
	 var Tzm = {
        x: [],
        y: [],
        name: 'T<sub>zm</sub>',    //Temperatura wody z elektrocieplowni
        mode: 'lines'
    };

    var Tpm = {
        x: [],
        y: [],
        name: 'T<sub>pm</sub>',    //Temperatura wody powrotnej
        mode: 'lines'
    };

    var Tzco = {
        x: [],
        y: [],
        name: 'T<sub>zco</sub>',   //Temperatura wody wyplywajacej z wymiennika do budynkow
        mode: 'lines'
    };

    var Tpco ={
        x: [],
        y: [],
        name: 'T<sub>pco</sub>',   //Temperatura wody po powrocie z budynkow (Tpco)
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
            title: 'Temperatura'
        }
    };
    
    Plotly.newPlot(mainChartDiv, mainData, mainLayout);
};
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
        //x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
        //y: [1, 3, 6],
		
		x:date,
		y:Tzm1,
        name: 'Tzm',    //Temperatura wody z elektrocieplowni
        mode: 'lines'
    };

    var Tpm = {
        //x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
        //y: [4, 2, 9],
		x:date,
		y:Tpm1,
        name: 'Tpm',    //Temperatura wody powrotnej
        mode: 'lines'
    };

    var Tzco = {
        //x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
        //y: [3, 3, 0],,
		x:date,
		y:Tzco1,	
        name: 'Tzco',   //Temperatura wody wyplywajacej z wymiennika do budynkow
        mode: 'lines'
    };

    var Tpco ={
        //x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
        //y: [8, 3, 5],
		x:date,
		y:Tpco1,
        name: 'Tpco',   //Temperatura wody po powrocie z budynkow (Tpco)
        mode: 'lines'
    };

    var mainData = [Tzm, Tpm, Tzco, Tpco];

    var mainLayout = {
        title: 'Temperatury w glownym wymienniku ciepla',
        legend: {
            x: 1,
            y: 1
        },
        yaxis: {
            title: 'Temperatura '
        }
    };

    
    Plotly.newPlot(mainChartDiv, mainData, mainLayout);
};
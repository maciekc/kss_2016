/**
 * Created by kalksever on 2016-11-12.
 */

'use strict';

function openTimeDropdown() {
    document.getElementById("timeUnits").classList.toggle("show");
}

function week() {
    if(timeUnit != 'week') {
        timeUnit = 'week';
        generateAllCharts();
    }
}

function month() {
    if(timeUnit != 'month') {
        timeUnit = 'month';
        generateAllCharts();
    }
}
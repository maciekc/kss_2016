//var date;
//var Tzm1;
//var Tpm1;
//var Tzco1;
//var Tpco1;
//var Tr1;
//var Th1;

'use strict';

function openTimeDropdownReport() {
    document.getElementById("timeUnitsReport").classList.toggle("show");
}

function report_day() {
    if(timeUnitR!= 'day') {
        timeUnitR = 'day';
    }
    d3.json('/wizualizacja/raport/'+timeUnitR+'/',function(){});

}

function report_week() {
    if(timeUnitR != 'week') {
        timeUnitR = 'week';
    }
    d3.json('/wizualizacja/raport/'+timeUnitR+'/',function(){});

}

function report_month() {
    if(timeUnitR != 'month') {
        timeUnitR = 'month';
    }
    d3.json('/wizualizacja/raport/'+timeUnitR+'/',function(){});

}
function report_all() {
    if(timeUnitR != 'all') {
        timeUnitR = 'all';
    }
    d3.json('/wizualizacja/raport/'+timeUnitR+'/',function(){});

}
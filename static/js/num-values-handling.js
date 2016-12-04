/**
 * Created by kalksever on 2016-11-12.
 */

'use strict';

var d3 = Plotly.d3;
var timeUnit = 'day';
var timeUnitR = 'day';
var buildingNo = '1';
var numData = {
        Fzm: 0,
        To: 0,
        Tzm: 0,
        Tzco: 0,
        Th: 0,
        Tr: 0,
        Tpco: 0,
        Tpm: 0,
};
var toWithDelay = 0;

var changeNumValues = function() {
        d3.selectAll('.numval').data(Object.values(numData)).html(String);
};
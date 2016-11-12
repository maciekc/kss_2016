/**
 * Created by kalksever on 2016-11-12.
 */

'use strict';

var changeLeds = function () {

    var checkIndicatorStatus = function () {

    };

    var indicators = ['led led-red-off','led led-blue-off',
                        'led led-red-off','led led-blue-off',
                        'led led-red-off','led led-blue-off',
                        'led led-red-off','led led-blue-off',
                        'led led-red-off','led led-blue-off',
                        'led led-red-off','led led-blue-off',
                        'led led-red-off','led led-blue-off',
                        'led led-red-off','led led-blue-off'];

    checkIndicatorStatus();

    d3.selectAll('.numval-parent .led').data(indicators).attr('class',String);
};
/**
 * Created by kalksever on 2016-11-12.
 */

'use strict';

var changeLeds = function () {

    var indicators = ['led','led',
                        'led','led',
                        'led led-red-off','led led-blue-off',
                        'led led-red-off','led led-blue-off',
                        'led led-red-off','led led-blue-off',
                        'led','led',
                        'led','led',
                        'led','led'];

    var checkIndicatorStatus = function () {

        if(numData.Tzm > 1.1*(70-(2.5*(toWithDelay-6))))
            indicators[4] = 'led led-red-on';
        else if(numData.Tzm < 0.9*(70-(2.5*(toWithDelay-6))))
            indicators[5] = 'led led-blue-on';
        if(numData.Tzco > 1.1*(55 - (1.75 * numData.To)))
            indicators[6] = 'led led-red-on';
        else if(numData.Tzco < 0.9*(55 - (1.75 * numData.To)))
            indicators[7] = 'led led-blue-on';
        if(numData.Th > 1.1*(55 - (1.75 * numData.To)))
            indicators[8] = 'led led-red-on';
        else if(numData.Th < 0.9*(55 - (1.75 * numData.To)))
            indicators[9] = 'led led-blue-on';
    };

    checkIndicatorStatus();

    d3.selectAll('.numval-parent .led').data(indicators).attr('class',String);
};
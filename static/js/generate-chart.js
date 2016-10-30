/**
 * Created by kalksever on 2016-10-21.
 */
'use strict';

var generateAllCharts = function () {
    var SQLdata = JSON.parse('{{ SQLdata|escapejs }}');
    // mainChartDiv.data[0].x = SQLdata.time;
    // mainChartDiv.data[1].x = SQLdata.time;
    // mainChartDiv.data[2].x = SQLdata.time;
    // mainChartDiv.data[3].x = SQLdata.time;
    // streamChartDiv.data[0].x = SQLdata.time;
    // buildingChartDiv.data[0].x = SQLdata.time;
    // buildingChartDiv.data[1].x = SQLdata.time;
    // mainChartDiv.data[0].y = SQLdata.Tzm;
    // mainChartDiv.data[1].y = SQLdata.Tpm;
    // mainChartDiv.data[2].y = SQLdata.Tzco;
    // mainChartDiv.data[3].y = SQLdata.Tpco;
    // streamChartDiv.data[0].y = SQLdata.Fzm;
    // buildingChartDiv.data[0].y = SQLdata.Tr;
    // buildingChartDiv.data[1].y = SQLdata.Th;
    Plotly.redraw(mainChartDiv);
    Plotly.redraw(streamChartDiv);
    Plotly.redraw(buildingChartDiv);
};

generateMainChart();
generateStreamChart();
generateBuildingChart();

setInterval(generateAllCharts, 3000);

window.onresize = function() {
    Plotly.Plots.resize(mainChartDiv);
    Plotly.Plots.resize(streamChartDiv);
    Plotly.Plots.resize(buildingChartDiv);
};
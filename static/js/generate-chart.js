/**
 * Created by kalksever on 2016-10-21.
 */
'use strict';

var generateAllCharts = function () {
    d3.json('/wizualizacja/wiz/'+buildingNo+'/'+timeUnit+'/', function(SQLdata) {
        mainChartDiv.data[0].x = SQLdata.date;
        mainChartDiv.data[1].x = SQLdata.date;
        mainChartDiv.data[2].x = SQLdata.date;
        mainChartDiv.data[3].x = SQLdata.date;
        streamChartDiv.data[0].x = SQLdata.date;
        buildingChartDiv.data[0].x = SQLdata.date;
        buildingChartDiv.data[1].x = SQLdata.date;
        outsideChartDiv.data[0].x = SQLdata.date;
        mainChartDiv.data[0].y = SQLdata.Tzm;
        mainChartDiv.data[1].y = SQLdata.Tpm;
        mainChartDiv.data[2].y = SQLdata.Tzco;
        mainChartDiv.data[3].y = SQLdata.Tpco;
        streamChartDiv.data[0].y = SQLdata.Fzm;
        buildingChartDiv.data[0].y = SQLdata.Tr;
        buildingChartDiv.data[0].name = 'Tr'+buildingNo;
        buildingChartDiv.data[1].y = SQLdata.Th;
        buildingChartDiv.data[1].name = 'Th'+buildingNo;
        outsideChartDiv.data[0].y = SQLdata.To;
        numData.Tzm = SQLdata.Tzm[SQLdata.Tzm.length-1];
        numData.Tp = SQLdata.Tpm[SQLdata.Tpm.length-1];
        numData.Tzco = SQLdata.Tzco[SQLdata.Tzco.length-1];
        numData.Tpco = SQLdata.Tpco[SQLdata.Tpco.length-1];
        numData.Fzm = SQLdata.Fzm[SQLdata.Fzm.length-1];
        numData.Th = SQLdata.Th[SQLdata.Th.length-1];
        numData.Tr = SQLdata.Tr[SQLdata.Tr.length-1];
        numData.To = SQLdata.To[SQLdata.To.length-1];
        Plotly.redraw(mainChartDiv);
        Plotly.redraw(streamChartDiv);
        Plotly.redraw(buildingChartDiv);
        Plotly.redraw(outsideChartDiv);
        changeNumValues();
        changeLeds();
    });
};

generateMainChart();
generateStreamChart();
generateBuildingChart();
generateOutsideChart();

setInterval(generateAllCharts, 6000);

window.onresize = function() {
    Plotly.Plots.resize(mainChartDiv);
    Plotly.Plots.resize(streamChartDiv);
    Plotly.Plots.resize(buildingChartDiv);
    Plotly.Plots.resize(outsideChartDiv);
};
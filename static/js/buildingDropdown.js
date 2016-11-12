/**
 * Created by kalksever on 2016-11-12.
 */

'use strict';

function openBuildingDropdown() {
    document.getElementById("buildings").classList.toggle("show");
}

window.onclick = function (event) {
    if(!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        for(i=0; i<dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

function buildingOne() {
    if(buildingNo != '1') {
        buildingNo = '1';
        d3.json('/wizualizacja/'+buildingNo+'/'+timeUnit+'/', function(SQLdata) {
            buildingChartDiv.data[0].x = SQLdata.date;
            buildingChartDiv.data[1].x = SQLdata.date;
            buildingChartDiv.data[0].y = SQLdata.Tr;
            buildingChartDiv.data[1].y = SQLdata.Th;
        });
        Plotly.redraw(buildingChartDiv);
    }
}

function buildingTwo() {
    if(buildingNo != '2') {
        buildingNo = '2';
        d3.json('/wizualizacja/'+buildingNo+'/'+timeUnit+'/', function(SQLdata) {
            buildingChartDiv.data[0].x = SQLdata.date;
            buildingChartDiv.data[1].x = SQLdata.date;
            buildingChartDiv.data[0].y = SQLdata.Tr;
            buildingChartDiv.data[1].y = SQLdata.Th;
        });
        Plotly.redraw(buildingChartDiv);
    }
}
var nttdataCAIdynChart = document.getElementById("CAI-DYNCHART");
var dynChart = nttdataCAIdynChart.getAttribute('CHART');

function appendImage(){
    var basic_div = document.createElement("img");
    basic_div.setAttribute("id", "chart");
    var jsonChartData = JSON.parse(dynChart);
    jsonChartData.data.labels = jsonChartData.data.labels.split(",");
    jsonChartData.data.datasets = JSON.parse(jsonChartData.data.datasets);
    var dynChartUrl = "https://quickchart.io:443/chart?width=500&height=300&c=" + JSON.stringify(jsonChartData);
    basic_div.setAttribute("src", dynChartUrl );
    document.body.appendChild(basic_div);
}
appendImage();

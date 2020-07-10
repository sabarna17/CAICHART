var heads = $.request.headers;
var charttype = 'charttype';
for (var i = 0; i < heads.length; i++) {
	if (heads[i].name === 'charttype') {
		charttype = heads[i].value;
		break;
	}
}

var validateurl = "https://quickchart.io:443/chart?width=500&height=300&" + "c={type:%27";
var uri = charttype + "%27,";
var labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

var DATASET = [80, 90, 70, 82, 78];
var legend1 = 'Oil%20Price';
var data1 = {
	label: legend1,
	data: DATASET
};
var alldata = [];
alldata.push(data1);

var chartjson = {
	type: charttype,
	data: {
		labels: labels,
		datasets: alldata
	}
};
validateurl = "https://quickchart.io:443/chart?width=500&height=300&c=" + JSON.stringify(chartjson).toString();

var reply = {
	"replies": [{
		"type": 'card',
		"content": {
			"title": "Chart",
			"subtitle": "Your " + charttype + " chart is above",
			"imageUrl": validateurl
		}
    }],
	"conversation": {
		"memory": {
			"URL": "https://j4ia5972ceee.hana.ondemand.com/NTTINDCOE_CAI/dynURL.xsjs?DATASET=" + JSON.stringify(alldata) + "&CHARTTYPE=" +
				charttype + "&LABELS=" + labels
		}
	}
};

$.response.contentType = 'application/json';
$.response.setBody(JSON.stringify(reply));
$.response.status = $.net.http.OK;
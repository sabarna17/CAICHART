// Web Page --->
try {
    // Preparation of Dataset
    var DATASET = $.request.parameters.get("DATASET");
    var charttype = $.request.parameters.get("CHARTTYPE");
    var labels = $.request.parameters.get("LABELS");
    var chartjson = {type:charttype,data:{labels:labels, datasets:DATASET}};
    
    // Preparation of Elements
	var vIndexStart = '<html lang="en">';
	var vIndexHeadStart = '<head>';
	var vIndexHeadEnd = '</head>';
	var vIndexBodyStart = '<body>';
	var VindexBodyEnd = '</body>';
	var vIndexTail = '</html>';
	var vPage;
	
    // Call the Dynamic JS 	
	var vImgBody = "<script id='NTTDATA-CAI-DYNCHART' CHART='" + JSON.stringify(chartjson) + "' src='https://j4ia5972ceee.hana.ondemand.com/NTTINDCOE_CAI/chart.js'></script>";
	
    // Creation of Body 	
	vPage = vIndexStart + vIndexHeadStart + vIndexHeadEnd + vIndexBodyStart + VindexBodyEnd + vImgBody +  vIndexTail;
	$.response.contentType = "text/html";
	$.response.setBody(vPage);	
}
catch(e){
    $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
	$.response.setBody(e.message);
}
var date;
var Tzm1;
var Tpm1;
var Tzco1;
var Tpco1;
var Tr1;
var Th1;

$(function () {
	
	$('#but_r').on('click', function(){
		
		$.ajax({
			type: 'GET',
			url: "wizualizacja/raport/",
			data: {
				okres: 'tydzien',
//				$(#okres).val(),
			}	
		});
		
	});
		  //your code here

});

// setInterval(function()
// 	{
// 		$.ajax({
// 			type: 'GET',
// 			url: '',
// 			data : {},
// 			success: function(res){
// 				//$().html(res);
// ////				console.log(res);
// ////				document.write(res);
// 				 date = res.date;
// 				 Tzm1 = res.Tzm;
// 				 Tpm1 = res.Tpm;
// 				 Tzco1 = res.Tzco;
// 				 Tpco1 = res.Tpco;
// 				 Tr1 = 	res.Tr;
// 				 Th1 = 	res.Th;
// 				 generateAllCharts();
// ////				 console.log("ok");
// 				 //console.log(date);
// 			},
// 			error: function(){
// 				console.log("blad");
// 			}
// 		});
// 	},10000);
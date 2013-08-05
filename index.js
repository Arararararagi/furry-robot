window.onload = function() {
	//Perpetuity

	$("#Capitalper").keyup(function () {
		$("#interestper").keyup(function () {
			var capital = $("#Capitalper").val();
			var interest = $("#interestper").val();
			$("#PVperpetuity").text((capital/interest)*100);
		})
	}).keyup();
	$("#interestper").keyup(function () {
		$("#Capitalper").keyup(function () {
			var capital = $("#Capitalper").val();
			var interest = $("#interestper").val();
			$("#PVperpetuity").text(((capital/interest)*100));
		})
	}).keyup();

/*
	//Annuity

	$("#Capital").keyup(function () {
		$("#interest").keyup(function () {
			$("#periods").keyup(function () {
				var periods = $("#periods").val();
				var capital = $("#Capital").val();
				var interest = $("#interest").val();
				$("#PVannuity").text((capital/interest)*(1-(1/Math.pow(1+interest, periods))));
			})
		})
	}).keyup();
	$("#interest").keyup(function () {
		$("#Capital").keyup(function () {
			$("#periods").keyup(function () {
				var periods = $("#periods").val();
				var capital = $("#Capital").val();
				var interest = $("#interest").val();
				$("#PVannuity").text((capital/interest)*(1-(1/Math.pow(1+interest, periods))));
			})
	}).keyup();
*/

	$('input[type="number"]').focus(function() {
    $(this).addClass("focus");


});
 
$('input[type="number"]').blur(function() {
    $(this).removeClass("focus");
});
}
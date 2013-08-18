var objPage = null;
function showPage(pageName) {
if (objPage) objPage.style.display = 'none';
	objPage=document.getElementById(pageName);
objPage.style.display = 'block';
};

window.onload = function() {
	$('input[type="number"]').focus(function() {
    	$(this).addClass("focus");
    });

	$('input[type="number"]').blur(function() {
	    $(this).removeClass("focus");
	});

	showPage("home");

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


	//Annuity

	$("#button").click(function(){
		var periods = $("#periodsann").val();
		var capital = $("#Capitalann").val();
		var interest = $("#interestann").val();
		$("#PVannuity").text((capital/(interest/100))*(1-(1/Math.pow(1+(interest/100),periods))));


});
 
 	//Growing Annuity

 	$("#button1").click(function(){
 		var periods = $("#periodsgann").val();
 		var capital = $("#Capitalgann").val();
 		var interest = $("#interestgann").val();
 		var growth = $("#growthgann").val();
 		$("#PVannuityg").text((capital/((interest-growth)/100))*(1-Math.pow((1+growth/100)/(1+interest/100),periods)));
 	});

 	//Growing Perpetuity

 	$("#button2").click(function(){
 		var capital = $("#Capitalgper").val();
 		var interest = $("#interestgper").val();
 		var growth = $("#growthgper").val();
 		$("#PVperpetuityg").text(capital/((interest-growth)/100));
 	});

}
/*window.onload = function() {
    $("input").keyup(function () {
      var value = $(this).val();
      $("#PV").text(value);
    }).keyup();
};*/

window.onload = function() {
	$("#Capital").keyup(function () {
		$("#interest").keyup(function () {
			var capital = $("#Capital").val();
			var interest = $("#interest").val();
			$("#PV").text(capital/interest);
		})
	}).keyup();
	$("#interest").keyup(function () {
		$("#Capital").keyup(function () {
			var capital = $("#Capital").val();
			var interest = $("#interest").val();
			$("#PV").text(capital/interest);
		})
	}).keyup();
}
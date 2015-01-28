$(document).ready(function(){

$("form").on("submit", function(e){
	console.log($("input[type=text]").val());
	$(".even").css("backgroundColor", $("input[type=text]").val());

	e.preventDefault();
});
});

$(document).ready(function(){

$("form").append("<span>That password is less than 6 characters!</span>");

$("form").on("keyup", function(e){
	if ($("input[type=password").val().length >= 6){
		console.log("more than 6");
		$("span").addClass("visibilty");
		$('form').attr('id', 'canSubmit');
		return true;
	}
	else {
		$("span").removeClass("visibilty");
		$('form').attr('id', 'cannotSubmit');
	}
});
$('form').on("submit", function(e){
	if($('form').attr("id") === "canSubmit"){
		console.log("show success");
		$("p").removeClass("visibilty");

	}
	else {
		console.log("show no success");
	}
});





});
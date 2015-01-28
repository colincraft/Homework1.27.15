$(document).ready(function(){

$("form").append("<span>That password is less than 6 characters!</span>");
$("form").on("submit", function(e){
	e.preventDefault();
	});
$("form").on("submit", function(e){
	if ($("input[type=password").val().length >= 6){
		console.log("more than 6");
		$("span").remove();

	}
});





});
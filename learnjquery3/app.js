$(document).ready(function(){

$("form").on("submit", function(e){
	console.log($("input[type=text]").val());
	$("ul").append("<li>" + "<input type=checkbox />" +  $('input[type=text]').val() + "<button>Remove</button>" + "</li>");	
	e.preventDefault();
});
$("body").on("click", "li", function(e){
	$(this).toggleClass("completed");
	});
$("body").on("click", "button", function(e){
	$(this).parent("li").remove();
	});
});

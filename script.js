$(document).ready(function() {
	$('.done').click(function() {
		$(this).closest("tr").css("background-color", "rgb(41,137,216)");
	});
	$('.undone').click(function() {
		$(this).closest("tr").css("background-color", "")
	});
});

$(document).ready(function() {
	$('.done').click(function() {
		$(this).closest("tr").find("td:not(.action)").css("background-color", "orange");
	});
	$('.undone').click(function() {
		$(this).closest("tr").find("td:not(.action)").css("background-color", "");
	});
});


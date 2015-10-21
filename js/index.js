$(window).on('hashchange', route);
var analyPage = $.trim($('#analyTemp').html());
function route() {
	$('#contentFrame').html("");
	document.getElementById(contentFrame).innerHTML = analyPage;
}
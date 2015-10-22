$(window).on('hashchange', route);
var analyPage = $.trim($('#analyTemp').html());
var homePage = $.trim($('#homeTemp').html());
var disStrukPage = $.trim($('#disStrukTemp').html());
var algoDataPage = $.trim($('#algoDataTemp').html());
var modProgPage = $.trim($('#modProgTemp').html());
var techInfPage = $.trim($('#techInfTemp').html());

console.log(window.location.hash);
function route() {
	console.log(window.location.hash);
	var hash = window.location.hash;
	switch(hash) {
		case '':
		document.getElementById("contentFrame").innerHTML = homePage;
		break;
		case '#analysis':
		document.getElementById("contentFrame").innerHTML = analyPage;
		break;
		case '#diskreteStrukturen':
		document.getElementById("contentFrame").innerHTML = disStrukPage;
		break;
		case '#algoundDaten':
		document.getElementById("contentFrame").innerHTML = algoDataPage;
		break;
		case '#modeundProgra':
		document.getElementById("contentFrame").innerHTML = modProgPage;
		break;
		case '#techInform':
		document.getElementById("contentFrame").innerHTML = techInfPage;
		break;
	}
}
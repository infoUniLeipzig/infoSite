$(window).on('hashchange', route);
var analyPage = $.trim($('#analyTemp').html());
var homePage = $.trim($('#homeTemp').html());
var disStrukPage = $.trim($('#disStrukTemp').html());
var algoDataPage = $.trim($('#algoDataTemp').html());
var modProgPage = $.trim($('#modProgTemp').html());
var techInfPage = $.trim($('#techInfTemp').html());
var impressumPage = $.trim($('#impressumTemp').html());

route();
function route() {
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
		case '#impressum':
		document.getElementById("contentFrame").innerHTML = impressumPage;
		break;
	}
}


// Toggle menu!
var toggle = false;
$( "#menuToggle" ).click(function() {
	if (toggle == false) {
		$( "#navMenu" ).addClass( "navMenuTrans" );
		$( "#menuToggle" ).addClass( "actionToggle-open" );
		toggle = true;
	} else {
		$( "#navMenu" ).removeClass( "navMenuTrans" );
		$( "#menuToggle" ).removeClass( "actionToggle-open" );
		toggle = false;
	}
});
$( "#contentFrame" ).click(function() {
	if (toggle == true) {
		$( "#navMenu" ).removeClass( "navMenuTrans" );
		$( "#menuToggle" ).removeClass( "actionToggle-open" );
		toggle = false;
	}
});

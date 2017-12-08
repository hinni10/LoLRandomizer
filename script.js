var players = [];
var roles = ["Top", "", "Jungle", "", "Mid", "", "Adc", "", "Support"];
var numberOfPlayersSelected = 10;

$( document ).ready(function() {
        createInputsFromPlayersSelected(numberOfPlayersSelected);
    });

function playersSelectedFunction() {
	var playersSelected = $( "#players option:selected" ).text();
	var playersSelectedInt = parseInt(playersSelected);
	numberOfPlayersSelected = playersSelectedInt;
	createInputsFromPlayersSelected(numberOfPlayersSelected);
}

function createInputsFromPlayersSelected(playersSelected) {
	$('#playerInputs').html("");
	for (var i = 0; i <= playersSelected-1; i++) {
		$('<input/>').attr({ type: 'text', id: i , name: '' , placeholder: 'IGN' , class: 'form-control input-sm'}).appendTo('#playerInputs');
	}
	$("#teamsTable").removeClass('table-bordered');
	$("#teamsTable").addClass('table-bordered');
}

function shufflePlayers(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

function randomizeButtonClicked() {
	players = [];
	for (var i = 0; i <= numberOfPlayersSelected-1; i++) {
		players.push($('#' + i).val());
	}
	shufflePlayers(players);
	fillTable();

}

function fillTable() {
	var radioButtonValue = $('input[name=roles]:checked').val();
	if (radioButtonValue == "on") {
		$('#teamsTable').html("");
		$("#teamsTable").append("<b><th align='center'></th><th align='center'>Blue Side</th><th align='center'>Red Side</th></b>");
		for (var i = 0; i < numberOfPlayersSelected; i+=2) {
		 $("#teamsTable").append("<tr><td><b>" + roles[i] + "</b></td><td>" + players[i] + "</td><td>" + players[i+1] + "</td></tr>");
		}
	} else {
		$('#teamsTable').html("");
		$("#teamsTable").append("<th align='center'>Blue Side</th><th align='center'>Red Side</th>");
		for (var i = 0; i < numberOfPlayersSelected; i+=2) {
		 $("#teamsTable").append("<tr><td>" + players[i] + "</td><td>" + players[i+1] + "</td></tr>");
		}
	}

	
}




var tempIGNs = ["Hinni" , "Atli" , "Hlynur" , "SammiÞ" , "SammiG" , "Hemmi" , "Aleksei" , "Einar" , "Garðar" , "Sævar"];
function fillInputs() {
	for (var i = 0; i <= 9; i++) {
		$('#' + i).val(tempIGNs[i]);
	}
}
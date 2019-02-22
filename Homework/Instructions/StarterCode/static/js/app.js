var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#filter-btn");

$searchBtn.addEventListener("click", handleSearchButtonClick);

var tableData = data;

// create function to render the data to table body
function renderTable(dataToRender) {
	$tbody.innerHTML = "";
	for (var i = 0; i < dataToRender.length; i++) {
		var currentSighting = dataToRender[i];
        var infos = Object.keys(currentSighting);
		var $row = $tbody.insertRow(i);
		for (var j = 0; j < infos.length; j++) {
			var info = infos[j];
			var $cell = $row.insertCell(j);
			$cell.innerText = currentSighting[info];
		}
	}
}

function handleSearchButtonClick() {
    var inputDate = $dateInput.value;
    var filteredData = []
	if (inputDate.length != 0) {
		filteredData = tableData.filter(function(currentSighting){
			var sightingDate = currentSighting.datetime;
			return sightingDate.trim() === inputDate.trim();
		});
    }
    renderTable(filteredData);
    event.preventDefault();
}

renderTable(tableData);
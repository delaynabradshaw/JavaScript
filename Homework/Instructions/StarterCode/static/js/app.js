// first tbody element
var $tbody = document.querySelector("tbody");

// see index.html
// with id = "datetime", id = "filter-btn"
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#filter-btn");


// event listener to search button when button is clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

var tableData = data;

// render data to tbody
function renderTable(dataToRender) {
	// clear the previous table
	$tbody.innerHTML = "";

    console.log("dataToRender.length: ", dataToRender.length)

	// loop loads up to (dataToRender.length) times
	for (var i = 0; i < dataToRender.length; i++) {

		// info for the current sighting onto the i'th index
		var currentSighting = dataToRender[i];
        var infos = Object.keys(currentSighting);
		// new row in tbody and set index to be i
		var $row = $tbody.insertRow(i);

		// loop loads the info into the table
		// name the plural form or something similar
		for (var j = 0; j < infos.length; j++) {
			var info = infos[j];
			// every address gets a cell
			var $cell = $row.insertCell(j);
			// set the text content of a node
			$cell.innerText = currentSighting[info];
		}
	}
}

function handleSearchButtonClick() {
    console.log("Inside handle search button click")

	// we want to remove the beginnning and ending spaces
    var inputDate = $dateInput.value;
    var filteredData = []
    
    console.log("inputdate: ", inputDate)

	// === value and type must be equal

	// if anything
	if (inputDate.length != 0) {
        console.log("input date length isn't 0")
		filteredData = tableData.filter(function(currentSighting){
			var sightingDate = currentSighting.datetime;
			return sightingDate.trim() === inputDate.trim();
		});
    }
    // tableData = filteredData
	// no input, do nothing
    renderTable(filteredData);
    // return false;
    event.preventDefault();
}

// render
console.log("Rendering table")
console.log("table data length", tableData.length)
renderTable(tableData);
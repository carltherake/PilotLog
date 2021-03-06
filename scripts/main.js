var selectedDate,
    monthsInYear = new Array();

function SortRows(a, b) {
    a = new Date(a.Date);
    b = new Date(b.Date);
    return a<b ? -1 : a>b ? 1 : 0;
}

function DateSelected(dateText, inst){
    selectedDate = $(this).datepicker('getDate');
    SetTableCaption();
    BuildMonths(selectedDate);
    BuildTable();
}

function SetTableCaption() {
    var monthTable = document.getElementById("MonthView"),
        tableCaption = monthTable.createCaption();

        tableCaption.innerHTML = `<div><h3>Carl Ray Forgey ${MonthNames[selectedDate.getMonth()]} ${selectedDate.getFullYear()}</h3></div>`;
        tableCaption.innerHTML += "<div>Cert. #8FCA677M</div>";
        tableCaption.innerHTML += "<div>135.267(c) Assigned Duty Times: 0500 to 1900</div>";
}

function BuildTable() {
    var monthTable = document.getElementById("MonthView"),
        tableBody = monthTable.getElementsByTagName("tbody")[0],
        year = selectedDate.getFullYear(),
        month = MonthNames[selectedDate.getMonth()],
        daysArray = DatesStructure[year][month].days;
    
    while(tableBody.childNodes.length>0){tableBody.removeChild(tableBody.lastChild);}

    for (var i = 0; i < daysArray.length; i++)
    {
        var newRow = tableBody.insertRow(i),
            dateCell = newRow.insertCell(0),
            timesCell = newRow.insertCell(1),
            restCell = newRow.insertCell(2),
            oneThreeFiveCell = newRow.insertCell(3),
            otherComCell = newRow.insertCell(4),
            totalDaily = newRow.insertCell(5),
            month = newRow.insertCell(6),
            comments = newRow.insertCell(7),
            editCell = newRow.insertCell(8);

            dateCell.appendChild(document.createTextNode(daysArray[i].Date.getDate()));
            if (daysArray[i].StartTime !== null)
            {
                timesCell.appendChild(document.createTextNode(`${daysArray[i].StartTime} - ${daysArray[i].EndTime}`))
            }
            editCell.innerHTML = "<img src='./images/Pencil-icon.png' alt='edit' class='editicon' />";
    }
}

$(function() {
    selectedDate = new Date();
    SetTableCaption();
    Data.sort(SortRows);
    BuildMonths();
    BuildTable();
    $(".datepicker").datepicker({ onSelect: DateSelected });
    $(".datepicker").datepicker("setDate", new Date());
    $(".timepicker").timepicker();
});
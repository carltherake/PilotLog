var Days = GetDays(),
    selectedDate,
    monthsInYear = new Array();

function SortRows(a, b) {
    a = new Date(a.Date);
    b = new Date(b.Date);
    return a<b ? -1 : a>b ? 1 : 0;
}

function SetTableCaption() {
    var monthTable = document.getElementById("MonthView"),
        tableCaption = monthTable.createCaption(),
        monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        tableCaption.innerHTML = "<h3>" + monthNames[selectedDate.getMonth()] + "</h3>";
}

function BuildTable() {
    var monthTable = document.getElementById("MonthView"),
        tableBody = monthTable.getElementsByTagName("tbody")[0];

    for (var i = 0; i < Days.length; i++)
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
            editCell = newRow.insertCell(8),
            dayDate = new Date(Days[i].Date);

            dateCell.appendChild(document.createTextNode(dayDate.getDate()));
            editCell.innerHTML = "<img src='./images/Pencil-icon.png' alt='edit' class='editicon' />";
    }
}

$(function() {
    selectedDate = new Date();
    SetTableCaption();
    Days.sort(SortRows);
    BuildMonths();
    BuildTable();
    $(".datepicker").datepicker({
        onSelect: function(dateText, inst){
            selectedDate = $(this).datepicker('getDate');
            SetTableCaption();
        }});
    $(".datepicker").datepicker("setDate", new Date());
    $(".timepicker").timepicker();
});
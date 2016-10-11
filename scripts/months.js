var MonthNames = ["January", "February", "March", "April", "May",
                  "June", "July", "August", "September", "October",
                  "November", "December"],
    DatesStructure = {};

function BuildMonths(now = new Date()) {
    var thisYear = now.getFullYear(),
        dayTracker = new Date(now.getFullYear(), 0, 1);
    
    if (DatesStructure.hasOwnProperty(thisYear))
        return;

    DatesStructure[thisYear] = {};

    // we're starting the year at 0 month (January) and running through December
    // to generate the whole year for our year object we'll need to populate
    // for our other thing.
    for (var i = 0; i < 12; ++i)
    {
        var month = {
            year: dayTracker.getFullYear(),
            month: MonthNames[i],
            days: new Array()
        };
        while (dayTracker.getMonth() == i)
        {
            month.days.push(new Date(dayTracker));
            dayTracker.setDate(dayTracker.getDate() + 1);
        }
        DatesStructure[thisYear][MonthNames[i]] = month;
        monthsInYear.push(month);
    }
}
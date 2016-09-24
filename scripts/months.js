function BuildMonths() {
    var now = new Date(),
        thisYear = now.getFullYear(),
        dayTracker = new Date(now.getFullYear(), 0, 1);

    // we're starting the year at 0 month (January) and running through December
    // to generate the whole year for our year object we'll need to populate
    // for our other thing.
    for (var i = 0; i < 12; ++i)
    {
        var month = new Array();
        while (dayTracker.getMonth() == i)
        {
            month.push(new Date(dayTracker));
            dayTracker.setDate(dayTracker.getDate() + 1);
        }
        monthsInYear.push(month);
    }
}
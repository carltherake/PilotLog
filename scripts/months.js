/*
    DatesStructure:
        This global variable is the master data structure for the app.
        It will contain an object for each year that gets indexed.
        Each year object will contain a month object, which will contain a day
        object for each day in that month.
*/

var MonthNames = ["January", "February", "March", "April", "May",
                  "June", "July", "August", "September", "October",
                  "November", "December"],
    DatesStructure = {},
    Data = GetDays();

/*
    Create year object.

    Get a date reference to January 1st of the year.
    Create a Month object for January in the year object.
    Loop through the days in January.


*/
function BuildMonths(now = new Date()) {
    var thisYear = now.getFullYear(),
        dayTracker = new Date(now.getFullYear(), 0, 1),
        dataIndex = 0,
        dataIndexDate = new Date(Data[dataIndex].Date);

    
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
            if (!(dataIndex >= Data.length) && Compare(dayTracker, dataIndexDate) == 0)
            {
                month.days.push(
                    {
                        Date: new Date(dayTracker),
                        StartTime: Data[dataIndex].StartTime,
                        EndTime: Data[dataIndex].EndTime,
                        OneThreeFiveHours: Data[dataIndex]["135Hours"],
                        Comments: Data[dataIndex].Comments
                    }
                );
                dataIndex++;
                if (!(dataIndex >= Data.length))
                {
                    dataIndexDate = new Date(Data[dataIndex].Date);
                }
            }
            else
            {
                month.days.push(
                    {
                        Date: new Date(dayTracker),
                        StartTime: null,
                        EndTime: null,
                        OneThreeFiveHours: 0,
                        Comments: ''
                    }
                );
                dayTracker.setDate(dayTracker.getDate() + 1);
            }
        }
        DatesStructure[thisYear][MonthNames[i]] = month;
        monthsInYear.push(month);
    }
}

function Compare(date1, date2)
{
    if (date1 > date2) return 1;
    else if (date1 < date2) return -1;
    return 0;
}
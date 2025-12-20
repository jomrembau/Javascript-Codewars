function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return alert(year + " is a leap year");
                } else {
                     return alert(year + " is not a leap year");
                }
            }
        } else {
        return alert(year + " is not a leap year");
        }
}

leapYear(2000);
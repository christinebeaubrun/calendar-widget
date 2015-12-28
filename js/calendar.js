function CreateCalendar () {
	var months = [ 'January', 'Feburary', 'March', 'April', 'May','June','July','August','September','October','November','December' ],
		daysOfWeek = [ 'Sun', 'Mon', 'Tue', 'Wed','Thu','Fri' ],
		currentYear,
		currentMonth,
		currentDate = new Date();

	function createMonthYearLabel () {
		currentMonth = date.getMonth();
		var currentMonthName = months[ date.getMonth() ];
		currentYear = date.getFullYear();
		var monthYear = currentMonthName + " " + currentYear;
		
		var $monthYearSpan = document.getElementsByClassName('month-year')[0];
		$monthYearSpan.innerHTML = monthYear;
	}

	function createDaysInMonth () {
		var totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
		var firstDay = new Date(currentYear, currentMonth, 1);
		firstDay = /[A-Za-z]{3}/.exec( firstDay )[0];
		var lastDay = new Date(currentYear, currentMonth + 1, 0);
		lastDay = /[A-Za-z]{3}/.exec( lastDay )[0];
	}
	
	createMonthYearLabel();

};

CreateCalendar();
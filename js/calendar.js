function CreateMonth () {
	var months = [ 'January', 'Feburary', 'March', 'April', 'May','June','July','August','September','October','November','December' ],
		daysOfWeek = [ 'Sun', 'Mon', 'Tue', 'Wed','Thu','Fri', 'Sat' ],
		currentYear,
		currentMonth,
		currentDate = new Date(),
		todayDate = currentDate.getDate(),
		firstDayOfMonthSet;

	function createMonthYearLabel () {
		currentMonth = currentDate.getMonth();
		var currentMonthName = months[ currentDate.getMonth() ];
		currentYear = currentDate.getFullYear();
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

		var calDays = 35;

		var $monthTable = document.getElementsByClassName('current')[0];
		var totalNumOfRows = 5;
		var dayCounter = 0;

		for (var i = 0; i < totalNumOfRows; i++) {
			var $row = $monthTable.insertRow( i );
			daysOfWeek.forEach( function( day, index ){
				var $cell = $row.insertCell( index );

				if ( day === firstDay && !firstDayOfMonthSet ) {
					dayCounter++;
					firstDayOfMonthSet = true;
					$cell.innerHTML = dayCounter;
					return;
				}

				if ( dayCounter === 0 || dayCounter === totalDays ) {
					$cell.innerHTML = "";
					$cell.className = 'nil';
					return;
				}
				
				if ( dayCounter > 0  ) {
					dayCounter++;
					$cell.innerHTML = dayCounter;

					if ( dayCounter === todayDate ) {
						$cell.className = 'today';
					}
				}
			});
		};
	}
	
	return {
		init: function () {
			createMonthYearLabel();
			createDaysInMonth();
		}
	};
};

var createMonth = CreateMonth();
createMonth.init();
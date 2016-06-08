var calendarModel = require( '../models/calendar-model.js' ).create();
var domService = require( '../services/dom-elements-service.js' );

/*
	- createMonthYearLabel
	-- current month name [ STRING ]
	-- current year [ STRING | NUMBER ]
	-- DOM element
*/

function createCurrentMonthYearLabel ( options ) {
	// create the label that appears on top of the calendar
	options.element.innerHTML = options.month + " " + options.year;
}

module.exports = {

	createCalendar: function createCalendar () {

		createCurrentMonthYearLabel({
			month: calendarModel.todayMonth(),
			year: calendarModel.todayYear(),
			element: domService.getMonthYearHeader()
		});
	}
};

	// createCalendar();

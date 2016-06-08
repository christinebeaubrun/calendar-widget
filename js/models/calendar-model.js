var calendarDataService = require( '../services/calendar-data-service.js' );

module.exports = {
	create: function create () {

		function getTodayDateFull () {
			return new Date();
		}

		function getYear () {
			return getTodayDateFull().getFullYear();
		}

		function getTodayMonthNumber () {
			return getTodayDateFull().getMonth();
		}

		function getMonths (  ) {
			return calendarDataService.getMonths();
		}

		return {
			todayYear: function () {
				return getYear();
			},
			todayMonth: function () {
				var months = getMonths(),
					monthNum = getTodayMonthNumber();
				return months[ monthNum ] ;
			},
			todayDate: function () {
				return getTodayDateFull();
			},
			decrementMonth: function () {
				// logic for "going back in time"
			},
			incrementMonth: function () {
				// logic for "going forward in time"
			}
		};
	}
};

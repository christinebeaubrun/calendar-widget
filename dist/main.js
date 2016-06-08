(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require( './modules/calendar-module.js').createCalendar();
// // /*
// // 	(function calendarModule(){
// // 		- createMonth fn
// // 		- createCalendar fn
// // 		- createCalendar()
// // 	})();

// // 	- write functions that only do one thing
// // 	-- if it needs things to perform on, pass it as args

// // 	- query DOM elements once if you can
// // 	- create a model object for your date data

// // 	calendarModel = (function () {
// // 	  var date = new Date();
// // 	  var year = date.getFullYear();
// // 	  var month = date.getMonth();
// // 	  // ...

// // 	  return {
// // 	    getYear: function () {
// // 	      return year;
// // 	    },
// // 	    getMonth: function () {
// // 	      return month;
// // 	    },
// // 	    // ... rest of getters
// // 	    decrementMonth: function () {
// // 	      // logic for "going back in time"
// // 	    },
// // 	    incrementMonth: function () {
// // 	      // logic for "going forward in time"
// // 	    }
// // 	  };
// // 	})();

// // 	- extract constant data into a service object
// // 		(function calendarModule() {
// // 		  var calendarDataService = {
// // 		    getMonths: function() {
// // 		      return ['January',
// // 		        'February', // you spelled it "Feburary"
// // 		        'March',
// // 		        'April',
// // 		        'May',
// // 		        'June',
// // 		        'July',
// // 		        'August',
// // 		        'September',
// // 		        'October',
// // 		        'November',
// // 		        'December'
// // 		      ];          
// // 		    },
// // 		    getDaysOfWeek: function () {}
// // 		      return ['Sun', 'Mon', 'Tue', 'Wed','Thu','Fri', 'Sat'];
// // 		    }
// // 		  }

// // 		  // ...
// // 		})();
// // */

// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////

// var createMonth = {

// 	createMonthYearLabel: function () {
// 		var me = this;
// 		// create the label that appears on top of the calendar
// 		var currentMonth = me.currentMonth; // the index of the current month ex. 0
// 		var currentMonthName = me.months[ currentMonth ]; // get the name of current month ex. January
// 		var monthYear = me.currentMonthYear = currentMonthName + " " + currentYear; // create ex. January 2016
		
// 		me.$monthYearSpan.innerHTML = monthYear;
// 	},

// 	createDaysInMonth: function () {
// 		var me = this;

// 		var currentYear = me.currentYear,
// 			currentMonth = me.currentMonth,
// 			currentDateFull = new Date(currentYear, currentMonth);

// 		var totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // all days in a month
// 		var firstDay = new Date(currentYear, currentMonth, 1);
// 		firstDay = /[A-Za-z]{3}/.exec( firstDay )[0]; // day of the week when the month first begins ex. Tue

// 		var totalNumOfRows = 6; // using 6 rows to show an entire calendar month
// 		var dayCounter = 0;
// 		var daysOfWeek = [ 'Sun', 'Mon', 'Tue', 'Wed','Thu','Fri', 'Sat' ];
// 		var setFirstDayOfMonth; // to be set once to true

// 		for (var i = 0; i < totalNumOfRows; i++) {
// 			var $row = me.$monthTable.insertRow( i ); // creating a row
// 			daysOfWeek.forEach( function( day, index ){ // iterating through the days of the week
// 				var $cell = $row.insertCell( index ); // adding a cell to a row

// 				if ( day === firstDay && !setFirstDayOfMonth ) { // if first day of month not set & day equals first day
// 					// happens once for setting first day of month
// 					dayCounter++;
// 					setFirstDayOfMonth = true;
// 					$cell.innerHTML = dayCounter;

// 					if ( me.currentMonthYear === me.todayMonthYear ) {
// 						if ( dayCounter === me.todayDate ) {
// 							$cell.className = 'today'; // in case the first day of the month is today
// 						}
// 					}
					
// 					return;
// 				}

// 				if ( dayCounter === 0 || dayCounter === totalDaysInMonth ) {
// 					// creating empty squares with no dates / placeholders
// 					$cell.innerHTML = "";
// 					$cell.className = 'nil';
// 					return; // dayCounter will not be triggered on empty days
// 				}
				
// 				if ( dayCounter > 0  ) {
// 					dayCounter++;
// 					$cell.innerHTML = dayCounter;

// 					if ( me.currentMonthYear === me.todayMonthYear ) {
// 						if ( dayCounter === me.todayDate ) {
// 							$cell.className = 'today'; // in case the first day of the month is today
// 						}
// 					}
// 				}
// 			});
// 		};
// 	}
	
// };

// function createCalendar () {
// 	var me = this;

// 	me.prevBtn = document.getElementsByClassName('left button')[0]; // left arrow on calendar
// 	me.nextBtn = document.getElementsByClassName('right button')[0]; // right arrow on calendar
// 	me.$monthYearSpan = document.getElementsByClassName('month-year')[0]; // month-year title
// 	me.$monthTable = document.getElementsByClassName('current')[0]; // table

// 	me.months = [ 'January', 'Feburary', 'March', 'April', 'May','June','July','August','September','October','November','December' ];

// 	me.todayDateFull = new Date();
// 	me.currentYear = me.todayDateFull.getFullYear();
// 	me.currentMonth = me.todayDateFull.getMonth();
// 	me.todayDate = me.todayDateFull.getDate();
// 	me.currentMonthName = me.months[ me.currentMonth ]; // get the name of current month ex. January
// 	me.todayMonthYear = me.currentMonthName + " " + me.currentYear;

// 	var createMonthYearLabel = createMonth.createMonthYearLabel,
// 		createDaysInMonth = createMonth.createDaysInMonth;

// 	createMonthYearLabel.call( me );
// 	createDaysInMonth.call( me );

// 	prevBtn.onclick = function () { // goes back in time
// 		var me = this;

// 		me.$monthYearSpan.innerHTML = "";
// 		me.$monthTable.innerHTML = "";

// 		if ( me.currentMonth === 0 ) {
// 			// decrease the year
// 			me.currentMonth = 11;
// 			me.currentYear--;
// 		} else  {
// 			me.currentMonth--;
// 		}

// 		createMonthYearLabel.call( me );
// 		createDaysInMonth.call( me );

// 	}.bind( me );

// 	nextBtn.onclick = function () { // goes forward in time
// 		var me = this;

// 		me.$monthYearSpan.innerHTML = "";
// 		me.$monthTable.innerHTML = "";

// 		if ( me.currentMonth === 11 ) {
// 			// increase the year
// 			me.currentMonth = 0;
// 			me.currentYear++;
// 		} else {
// 			me.currentMonth++;
// 		}

// 		createMonthYearLabel.call( me );
// 		createDaysInMonth.call( me );

// 	}.bind( me );
// }

// // createCalendar();
},{"./modules/calendar-module.js":3}],2:[function(require,module,exports){
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

},{"../services/calendar-data-service.js":4}],3:[function(require,module,exports){
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

},{"../models/calendar-model.js":2,"../services/dom-elements-service.js":5}],4:[function(require,module,exports){
module.exports = {
	getMonths: function () {
		return ['January',
						'February',
						'March',
						'April',
						'May',
						'June',
						'July',
						'August',
						'September',
						'October',
						'November',
						'December'
		];
	},

	getDaysOfWeek: function () {
		return [ 'Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat' ];
	}
};
},{}],5:[function(require,module,exports){
function createCacheLoadFunction (load) {
	var cache;

	return function () {
		return cache !== undefined ? cache : cache = load();
	};
}

module.exports = {
	getMonthYearHeader: createCacheLoadFunction (function () {
		return document.getElementsByClassName('month-year')[0];
	})
};
},{}]},{},[1]);

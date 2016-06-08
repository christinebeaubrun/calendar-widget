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
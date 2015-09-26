(function(){

angular
	.module('will.nav')
	.controller('navControl', navControl);

navControl.$inject = [];

function navControl(){

	var navScope = this;
	angular.extend(navScope, {});

}

})();
(function(){

angular
	.module('will.about')
	.controller('aboutControl', aboutControl);

aboutControl.$inject = [];

function aboutControl(){

	var aboutScope = this;
	angular.extend(aboutScope, {});

}

})();
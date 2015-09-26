(function(){

angular
	.module('will.home')
	.controller('homeControl', homeControl);

homeControl.$inject = [];

function homeControl(){

	var homeScope = this;
	angular.extend(homeScope, {});

}

})();
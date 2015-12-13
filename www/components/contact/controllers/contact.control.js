(function(){

angular
	.module('will.contact')
	.controller('contactControl', contactControl);

contactControl.$inject = [];

function contactControl(){

	var contactScope = this;
	angular.extend(contactScope, {});

}

})();
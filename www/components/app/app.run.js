(function(){

angular
	.module('will')
	.run(runWill);

runWill.$inject = [
	'$rootScope',
	'$state'
];

function runWill($rootScope, $state){

	$rootScope.state = $state;

}

})();
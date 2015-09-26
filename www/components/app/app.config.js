(function(){

angular
	.module('will')
	.config(configure);

configure.$inject = [
	'$compileProvider',
	'$stateProvider', 
	'$urlRouterProvider',
	'$httpProvider'
];

function configure($compileProvider, $stateProvider, $urlRouterProvider, $translateProvider, $httpProvider){

	$urlRouterProvider.when('', 'home');
	$locationProvider.html5Mode(true);

}

})();
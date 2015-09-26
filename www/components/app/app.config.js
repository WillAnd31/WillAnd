(function(){

angular
	.module('will')
	.config(configure);

configure.$inject = [
	'$compileProvider',
	'$stateProvider', 
	'$locationProvider',
	'$urlRouterProvider',
	'$httpProvider'
];

function configure($compileProvider, $stateProvider, $locationProvider, $urlRouterProvider, $translateProvider, $httpProvider){

	$urlRouterProvider.when('', 'home');
	$locationProvider.html5Mode(true);

}

})();
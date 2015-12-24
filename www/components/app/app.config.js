(function(){

angular
	.module('will')
	.config(configure);

configure.$inject = [
	'$compileProvider',
	'$stateProvider', 
	'$locationProvider',
	'$urlRouterProvider',
	'$httpProvider',
	'$analyticsProvider'
];

function configure($compileProvider, $stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, $analyticsProvider){
	
	$analyticsProvider.virtualPageviews(true);

	$urlRouterProvider.when('', 'resume');
	$urlRouterProvider.otherwise('resume')
	$locationProvider.html5Mode(true);

}

})();
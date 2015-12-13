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

	$urlRouterProvider.when('', 'blog');
	$urlRouterProvider.otherwise('blog')
	$locationProvider.html5Mode(true);

}

})();
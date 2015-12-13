(function(){

angular
	.module('will', [

		// Third party
		'ngAnimate',
		'ui.router',
		'ui.router.stateHelper',
		'ngTouch',
		'angulartics',
		'angulartics.google.analytics',

		// Modules
		'will.templates',
		'will.nav',
		'will.blog',
		'will.resume',
		'will.contact',
		// 'will.about'

	])

})();
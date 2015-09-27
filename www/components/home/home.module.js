(function(){

angular
	.module('will.home', [])
	.config(configure);

configure.$inject = [
	'stateHelperProvider'
];

function configure(stateHelperProvider){

	stateHelperProvider
		.state({
			name: 'home',
			url: '/home',
			templateProvider: function($templateCache){
				return $templateCache.get('home.template.html');
			},
			controller: 'homeControl',
			controllerAs: 'homeScope'
		});

}

})();
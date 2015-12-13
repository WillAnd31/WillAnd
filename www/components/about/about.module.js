(function(){

angular
	.module('will.about', [])
	.config(configure);

configure.$inject = [
	'stateHelperProvider'
];

function configure(stateHelperProvider){

	stateHelperProvider
		.state({
			name: 'about',
			url: '/about',
			templateProvider: function($templateCache){
				return $templateCache.get('about.template.html');
			},
			controller: 'aboutControl',
			controllerAs: 'aboutScope'
		});

}

})();
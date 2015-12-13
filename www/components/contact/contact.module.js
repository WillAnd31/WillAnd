(function(){

angular
	.module('will.contact', [])
	.config(configure);

configure.$inject = [
	'stateHelperProvider'
];

function configure(stateHelperProvider){

	stateHelperProvider
		.state({
			name: 'contact',
			url: '/contact',
			templateProvider: function($templateCache){
				return $templateCache.get('contact.template.html');
			},
			controller: 'contactControl',
			controllerAs: 'contactScope'
		});

}

})();
(function(){

angular
	.module('will.resume', [])
	.config(configure);

configure.$inject = [
	'stateHelperProvider'
];

function configure(stateHelperProvider){

	stateHelperProvider
		.state({
			name: 'resume',
			url: '/resume',
			templateProvider: function($templateCache){
				return $templateCache.get('resume.template.html');
			},
			controller: 'resumeControl',
			controllerAs: 'resumeScope'
		});

}

})();
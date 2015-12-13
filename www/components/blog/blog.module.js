(function(){

angular
	.module('will.blog', [])
	.config(configure);

configure.$inject = [
	'stateHelperProvider'
];

function configure(stateHelperProvider){

	stateHelperProvider
		.state({
			name: 'blog',
			url: '/blog',
			templateProvider: function($templateCache){
				return $templateCache.get('blog.template.html');
			},
			controller: 'blogControl',
			controllerAs: 'blogScope'
		});

}

})();
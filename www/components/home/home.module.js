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
			templateUrl: 'components/home/templates/home.template.html',
			controller: 'homeControl',
			controllerAs: 'homeScope'
		});

}

})();
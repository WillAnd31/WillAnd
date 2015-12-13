(function(){

angular
	.module('will.blog')
	.controller('blogControl', blogControl);

blogControl.$inject = [];

function blogControl(){

	var blogScope = this;
	angular.extend(blogScope, {});

}

})();
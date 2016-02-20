(function () {
    
angular
    .module('will.blog')
    .factory('BlogService', BlogService);
    
BlogService.$inject = [];
    
function BlogService () {
    return {
        getBlogs: getBlogs
    };
}

function getBlogs () {
    
}
    
})();
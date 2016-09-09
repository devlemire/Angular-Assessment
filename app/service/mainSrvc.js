angular
  .module('app')
  .service('mainSrvc', function($http) {

    this.getProducts = function() {
      return $http.get('http://practiceapi.devmounta.in/products')
    }

    this.getProduct = function(id) {
      return $http.get('http://practiceapi.devmounta.in/products/' + id)
    }

  })

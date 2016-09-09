angular
  .module('app')
  .service('mainSrvc', function($http) {

    this.getProducts = function() {
      return $http.get('https://practiceapi.devmounta.in/products')
    }

    this.getProduct = function(id) {
      return $http.get('https://practiceapi.devmounta.in/products/' + id)
    }

  })

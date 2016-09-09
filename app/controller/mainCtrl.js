angular
  .module('app')
  .controller('mainCtrl', function($scope, $location, mainSrvc, $stateParams) {

    $scope.showImage = true;
    $scope.showLink = false

    $scope.checkPath = function() {
      if($location.$$path === '/shop') {
        mainSrvc.getProducts().then(function(r) {
          $scope.products = r.data;
          console.log($scope.products);
        })
      } else {
        setTimeout(function() {
          if($stateParams.id) {
            console.log($stateParams.id);
            mainSrvc.getProduct($stateParams.id).then(function(r) {
              $scope.product = r.data;
              console.log($scope.product);
            })
          }
        }, 1)
      }
    }()

    $scope.toggleImage = function() {
      $scope.showImage = !$scope.showImage;
      $scope.showLink = !$scope.showLink;
    }

  });

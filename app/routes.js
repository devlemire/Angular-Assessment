angular
  .module('app')
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: './views/about.html'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: './views/blog.html'
      })
      .state('shop', {
        url: '/shop',
        templateUrl: './views/shop.html',
        controller: 'mainCtrl'
      })
      .state('details', {
        url: '/details/:id',
        templateUrl: './views/product-details.html',
        controller: 'mainCtrl'
      })

    $urlRouterProvider.otherwise('/');
  });

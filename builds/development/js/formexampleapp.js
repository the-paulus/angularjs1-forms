var app = angular.module('formExampleApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/index.html'
      , controller: 'IndexController'
    })
    .when('/checkboxes', {
      templateUrl: 'views/checkboxes.html'
      , controller: 'CheckboxesController'
    })
    .when('/radios', {
      templateUrl: 'views/radios.html'
      , controller: 'RadiosController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i = 0; i < total; i++) {
      input.push(i);
    }
    return input;
  };
});

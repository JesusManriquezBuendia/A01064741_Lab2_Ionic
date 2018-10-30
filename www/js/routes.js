angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('page', {
    url: '/page1',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('page2', {
    url: '/page2',
    params: {
      text1: null,
      radio1: 0,
      check1: 0,
      check2: 0,
      range1: 0,
      toggle1: 0
    },
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

$urlRouterProvider.otherwise('/page1')


});

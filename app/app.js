angular.module('App', ['ui.router'])
  .config(function($logProvider) {
    $logProvider.debugEnabled(true);
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main',
        {
          url: '/',
          templateUrl: 'partials/main.html'
        })
      .state('main.child1',
        {
          url: 'child1',
          template: '<h3>child1</h3>'
        })
      .state('main.child2',
        {
          url: 'child2',
          template: '<h3>child2</h3>'
        });


  })
.run(function($rootScope, $log) {
    $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
      $log.error(event, unfoundState);
    });
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      $log.error(event, toState.name, error);
    });
  });
  

$(document).ready(function() {
  console.log("document loaded");
});

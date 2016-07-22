angular.module('App', ['ui.router'])
  .config(function($logProvider) {
    $logProvider.debugEnabled(true);
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('');
    $stateProvider
      .state('welcome',
        {
          url: '',
          templateUrl: 'partials/welcome.html'
        })
      .state('blog',
        {
          url: '/blog',
          templateUrl: 'partials/blog.html'
        })
      .state('contact',
        {
          url: '/contact',
          templateUrl: 'partials/contact_info.html'
        })
      .state('projects',
        {
          url: '/projects',
          template: '<div ui-view></div>'
        })
      .state('projects.list',
        {
          url: '/list',
          templateUrl: 'partials/projects/projects.html'
        })
      .state('projects.fantasy_coop_game',
        {
          url: '/fantasy_coop_game',
          templateUrl: 'partials/projects/fantasy_coop_game.html'
        })
      .state('projects.mutespeak',
        {
          url: '/mutespeak',
          template: '<p>A rough tool to help mute gamers communicate with their team using traditional VoIP applications.</p>'
        })
      .state('projects.website_info',
        {
          url: '/website_info',
          template: '<p>My personal website is built from scratch using a text editor and/css.</p>'
        })
      .state('projects.offclass_finder',
        {
          url: '/offclass_finder',
          template: '<p>An web scraping tool which automatically finds who has been breaking the rules at <a ui-sref=".http://www.tf2center.com" class="main.projects.link">TF2 Center</a>, a website for organizing competitive-format games for <a ui-sref="https://en.wikipedia.org/wiki/Team_Fortress_2" class="main-link">TF2</a> players.</p>'
        })
      .state('projects.ufc',
        {
          url: '/ufc',
          template: '<p>I created the website for the <a class="main.projects.link" ui-sref=".http://ufc.gtorg.gatech.edu/">Unmanned Flying Club</a> at Georgia Tech.'
        })
      .state('projects.swf',
        {
          url: '/swf',
          template: '<p>An Android application for a semester-long course</p>'
        })
      .state('projects.travelling_saleshot',
        {
          url: '/travelling_saleshot',
          template: '<p>Programming a robot using an FPGA and assembly.</p>'
        })
      .state('projects.weird_nums',
        {
          url: '/weird_nums',
          template: '<p>Finding pairs of numbers which satisfy an interesting property</p>'
        })
			.state('hobbies',
			  {
				  url: '/hobbies',
					templateUrl: 'partials/hobbies.html'
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

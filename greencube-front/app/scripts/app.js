'use strict';

/**
 * @ngdoc overview
 * @name greencubeFeApp
 * @description
 * # greencubeFeApp
 *
 * Main module of the application.
 */
angular
  .module('greencubeFeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $routeProvider
      .when('/tasks', {
        templateUrl: 'views/tasks/task.html',
        controller: 'TaskController',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/tasks'
      });
  });

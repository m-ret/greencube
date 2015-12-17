'use strict';
/**
 * @ngdoc function
 * @name greencubeFeApp.factory:TaskFactory
 * @description
 * # TaskFactory
 * Controller of the greencubeFeApp
 */
angular.module('greencubeFeApp')
  .factory('TaskFactory', function ($q, $http) {
    return {
      sendTask: function(taskData) {
        return $http.post('http://localhost:3000/task/save', {
          name : taskData.name
        })
      },

      getTasks: function() {
        return $http.get('http://localhost:3000/task/list');
      }
    }
  });

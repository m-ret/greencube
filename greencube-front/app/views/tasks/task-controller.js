'use strict';
/**
 * @ngdoc function
 * @name greencubeFeApp.controller:TaskController
 * @description
 * # TaskController
 * Controller of the greencubeFeApp
 */
angular.module('greencubeFeApp')
  .controller('TaskController', function ($scope, $timeout, TaskFactory) {

    $scope.tasks = [];
    $scope.hint = false;
    $scope.saving = false;

    $scope.getTotalTasks = function() {
      return $scope.tasks.length;
    };

    $scope.getTasks = function() {
      TaskFactory.getTasks().then(function(tasks) {
        $scope.tasks = tasks.data;
      });
    }

    $scope.addTask = function() {
      if ($scope.formTasksText && $scope.formTasksText.length > 4) {
        $scope.hint = false;
        $scope.saving = true;
        $timeout(function() {
          $scope.saving = false
          $scope.tasks.push({ name : $scope.formTasksText });
          TaskFactory.sendTask({ name : $scope.formTasksText });
          $scope.formTasksText = '';
        }, 1000);
      } else {
        $scope.hint = true;
      }
    };
  });

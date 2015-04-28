angular.module('angularApp', [])
  .controller('MessageController', function($scope) {
    $scope.searchText;
    $scope.textList = [];

    $scope.submitText = function () {
      var object = {text: $scope.searchText, likes: 0};
      $scope.textList.push(object);
      $scope.searchText = '';
    };

    $scope.like = function(object) {
      object.likes += 1;
    };

    $scope.dislike = function(object) {
      object.likes -= 1;
    };
  });
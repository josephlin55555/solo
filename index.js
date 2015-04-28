angular.module('angularApp', [])
  .controller('MessageController', function($scope) {
    $scope.searchText;
    $scope.textList = [];

    $scope.submitText = function () {
      var object = {text: $scope.searchText, likes: 0};
      $scope.textList.push(object);

      if(object.text === "Joseph is awesome") {
        object.likes = 9001;
      }

      $scope.searchText = '';
    };

    $scope.like = function(object) {
      if(object.likes > -5) {
        object.likes += 1;
      }

      if(object.likes === 10) {
        object.text += " is an awesome idea!"
      }
    };

    $scope.dislike = function(object) {
      if(object.likes < 10) {
        object.likes -= 1;
      }
      if(object.likes === -5) {
        object.text += " is";
        object.likes
      } else if(object.likes === -10) {
        object.text += " a really really";
      } else if(object.likes === -15) {
        object.text += " shitty";
      } else if(object.likes === -20) {
        object.text += " idea";
      }
    };
  });
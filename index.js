angular.module('angularApp', [])
  .controller('MessageController', function($scope, $http) {
    $scope.textList = [];
    var index = 0;

    $scope.submitText = function () {
      index++;
      var object = {text: $scope.searchText, likes: 0, index: index};

      if(object.text === "Joseph is awesome") {
        object.likes = 9001;
      }

      $scope.textList.push(object);
      $scope.searchText = '';

      $http.post('/api/textList', $scope.textList).
      success(function(data, status, headers, config) {
        $scope.textList = data;
        console.log(data);
      }).
      error(function(data, status, headers, config) {
        console.log('error');
      });
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




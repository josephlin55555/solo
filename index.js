angular.module('angularApp', [])
  .controller('MessageController', function($scope, $http) {
    $scope.textList = [];

    $scope.submitText = function () {
      var object = {text: $scope.searchText, likes: 0, index: $scope.textList.length - 1};

      if(object.text === "Joseph is awesome") {
        object.likes = 9001;
      }

      $scope.textList.push(object);
      $scope.searchText = '';

      $http.post('/api/textList', object).
      success(function(data, status, headers, config) {
        console.log('success');
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

      $http.post('/api/textList', object).
      success(function(data, status, headers, config) {
        console.log('success');
      }).
      error(function(data, status, headers, config) {
        console.log('error');
      });
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

      $http.post('/api/textList', object).
      success(function(data, status, headers, config) {
        console.log('success');
      }).
      error(function(data, status, headers, config) {
        console.log('error');
      });
    };

    var reload = function(){
      $http.get('/api/textList').
      success(function(data, status, headers, config) {
        $scope.textList = data;
        setTimeout(function() {
          reload();
        }, 1000);
      }).
      error(function(data, status, headers, config) {
        console.log('error');
        reload();
      });
    }
    reload();
  });




angular.module('angularApp', [])
  .controller('MessageController', function($scope, $http) {
    $scope.textList = [];

    $scope.submitText = function () {
      $http.get('/api/textList')
        .success(function(data, status, headers, config) {
          $scope.textList = data;

          //for first item, $scope.textList.length === 0 at this moment
          var object = {text: $scope.searchText, likes: 0, index: $scope.textList.length};

          if(object.text === "Joseph is awesome") {
            object.likes = 9001;
          }

          $scope.textList.push(object); //now $scope.textList.length === 1
          $scope.searchText = '';

          $http.post('/api/textList', object).
          success(function(data, status, headers, config) {

          }).
          error(function(data, status, headers, config) {
            
          });

        }).
        error(function(data, status, headers, config) {

        }); 
    };

    $scope.like = function(object) {
      if(object.likes > -5) {
        object.likes += 1;
      }

      if(object.likes === 10) {
        object.text = object.text + " is an awesome idea!"
      }

      var array = [object.index, object.likes, object.text];
      $http.post('/api/textList', array).
        success(function(data, status, headers, config) {

        }).
        error(function(data, status, headers, config) {

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

      var array = [object.index, object.likes, object.text];
      $http.post('/api/textList', array).
        success(function(data, status, headers, config) {

        }).
        error(function(data, status, headers, config) {

        });
    };

    //loads data when first loaded
    $http.get('/api/textList').
      success(function(data, status, headers, config) {
        $scope.textList = data;
      }).
      error(function(data, status, headers, config) {

      });

  });




angular.module('app.controllers', [])

.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.mdl = {};

  $scope.resetButton = function(){
    $scope.mdl.text1="";
    $scope.mdl.radio1="";
    $scope.mdl.check1=false;
    $scope.mdl.check2=false;
    $scope.mdl.range1="5";
    $scope.mdl.toggle1=false;

  }

}])

.controller('page2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.text1 = $stateParams.text1;
  $scope.radio1 = $stateParams.radio1;
  $scope.check1 = $stateParams.check1;
  $scope.check2 = $stateParams.check2;
  $scope.range1 = $stateParams.range1;
  $scope.toggle1 = $stateParams.toggle1;

}])

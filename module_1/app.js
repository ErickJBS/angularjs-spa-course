(function() {
    'use scrict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.message = '';
        $scope.lunch = '';

        $scope.lunchCheck = function() {
            if ($scope.lunch) {
                var items = $scope.lunch.split(',');
                $scope.message = items.length <= 3? 'Enjoy!' : 'Too much!';
            } else {
                $scope.message = 'Please enter data first';
            }
        }

    }
})();
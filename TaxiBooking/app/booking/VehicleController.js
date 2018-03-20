angular.module("bookingApp").controller("VehicleController", function ($scope, $http) {

    $scope.init = function () {
        $http.get("http://webteach_net.hallam.shu.ac.uk/acesjas/api/vehicle")
            .success(function (response) {
                $scope.Vehicles = response;
            })
            .error(function (error) {
                $scope.errorMessage = error;
            });

    };

    $http.get("http://webteach_net.hallam.shu.ac.uk/acesjas/api/vehicle")
        .success(function (response) {
            $scope.Vehicles = response;
        })
        .error(function (error) {
            $scope.errorMessage = error;
        });



    $scope.viewVehicle = true;

    $scope.openVehicle = function () {
        $scope.viewVehicle = true;
    };
    $scope.closeVehicle = function () {
        $scope.viewVehicle = false;
    };

});

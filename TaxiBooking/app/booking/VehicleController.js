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
    //first laoding of vehicles
    $http.get("http://webteach_net.hallam.shu.ac.uk/acesjas/api/vehicle")
        .success(function (response) {
            $scope.Vehicles = response;
        })
        .error(function (error) {
            $scope.errorMessage = error;
        });

    //A function to add a new vehcile

    $scope.addVehicle = function(){

        var vehicleDetails= {
            Id: $scope.Vehicles.length,
            Make: $scope.vehicleMake,
            Capacity: $scope.vehicleCapacity,
            Driver: $scope.vehicleDriver,
            Registration: $scope.vehicleRegistration,
            Model: $scope.vehicleModel
        };
        $http.post("http://webteach_net.hallam.shu.ac.uk/acesjas/api/vehicle", vehicleDetails);

        $scope.vehicleMake = "";
        $scope.vehicleCapacity = "";
        $scope.vehicleDriver = "";
        $scope.vehicleRegistration = "";
        $scope.vehicleModel = "";

        $scope.init();

    };

    //methods to display vehicle table
    $scope.viewVehicle = true  ;

    $scope.openVehicle = function () {
        $scope.viewVehicle = true;
    };
    $scope.closeVehicle = function () {
        $scope.viewVehicle = false;
    };

});

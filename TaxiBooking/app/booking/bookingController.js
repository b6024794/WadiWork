angular.module("bookingApp").controller("bookingController", function ($scope, $http) {
    $http.get("http://webteach_net.hallam.shu.ac.uk/acesjas/api/booking")
        .success(function (response) {
            $scope.bookings = response;
        })
        .error(function (error) {
            $scope.errorMessage = error;
        });

    $scope.addBooking = function () {
        var bookingDetails = {
            //Id: $scope.bookings.length,
            PassengerName: $scope.PassengerName,
            PickupLocation: $scope.PickupLocation,
            DropOffLocation: $scope.DropOffLocation,
            VehicleId: $scope.VehicleId,
            CurrentPassenger: $scope.CurrentPassenger
        };

        $http.post("http://webteach_net.hallam.shu.ac.uk/acesjas/api/booking", bookingDetails);
        $scope.PassengerName = "";
        $scope.PickupLocation = "";
        $scope.DropOffLocation = "";
        $scope.VehicleId = "";
        $scope.CurrentPassenger = "";
    };

    // methods for viewing the Bookings
    $scope.viewBookings = false;

    $scope.openBookings = function () {
        $scope.viewBookings = true;
    };
    $scope.closeBookings = function () {
        $scope.viewBookings = false;
    };
    //methods for viewing the add booking form
    $scope.BookingsForm = false;

    $scope.viewBookingForm = function () {
        $scope.BookingsForm = true;
    };
    $scope.closeBookingForm = function () {
        $scope.BookingsForm = false;
    }
});
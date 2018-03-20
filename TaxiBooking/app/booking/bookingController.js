angular.module("bookingApp").controller("bookingController", function ($scope, $http) {

    $scope.init = function () {
        $http.get("http://webteach_net.hallam.shu.ac.uk/acesjas/api/booking")
            .success(function (response) {
                $scope.bookings = response;
            })
            .error(function (error) {
                $scope.errorMessage = error;
            });

    };

    $http.get("http://webteach_net.hallam.shu.ac.uk/acesjas/api/booking")
        .success(function (response) {
            $scope.bookings = response;
        })
        .error(function (error) {
            $scope.errorMessage = error;
        });
    var bookingId;



    //A function to add details to the booking service  
    $scope.addBooking = function () {



        var bookingDetails = {
            Id: $scope.bookings.length,
            PassengerName: $scope.PassengerName,
            PickupLocation: $scope.PickupLocation,
            DropOffLocation: $scope.DropOffLocation,
            VehicleId: $scope.VehicleId,
            CurrentPassenger: $scope.CurrentPassenger
        };

        $http.post("http://webteach_net.hallam.shu.ac.uk/acesjas/api/booking", bookingDetails);


        //clears text fields
        $scope.PassengerName = "";
        $scope.PickupLocation = "";
        $scope.DropOffLocation = "";
        $scope.VehicleId = "";
        $scope.CurrentPassenger = "";
        //need code to reload data
        $scope.init();
    };

    //function to remove a booking
    $scope.remove = function (bookingId) {
        $http.delete("http://webteach_net.hallam.shu.ac.uk/acesjas/api/booking/" + bookingId)
            .success(function (response) {
                $scope.bookings = response;
                $scope.init();
            })
            .error(function (error) {
                $scope.errorMessage = error;
            });
    }
    //function to edit a response 
    $scope.displayEditBooking = function (bookingId) {
        $scope.editBooking = true
        $http.get("http://webteach_net.hallam.shu.ac.uk/acesjas/api/booking/" + bookingId)
            .success(function (response) {
                $scope.EditPassengerName = response.PassengerName;
                $scope.EditPickupLocation = response.PickupLocation;
                $scope.EditDropOffLocation = response.DropOffLocation;
                $scope.EditVehicleId = response.VehicleId;
                $scope.EditCurrentPassenger = response.CurrentPassenger;
                bookingId = response.Id;
            })

        $scope.edit = function () {
            var EditDetails = {
                Id: bookingId,
                PassengerName: $scope.EditPassengerName,
                PickupLocation: $scope.EditPickupLocation,
                DropOffLocation: $scope.EditDropOffLocation,
                VehicleId: $scope.EditVehicleId,
                CurrentPassenger: $scope.EditCurrentPassenger
            };

            $http.put("http://webteach_net.hallam.shu.ac.uk/acesjas/api/booking/", EditDetails)
                .success(function (response) {
                    $scope.editBooking = false;
                    $scope.init();
                })
        }


    }








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


    //methods for viewing the edit form
    $scope.editBooking = false;

    $scope.openEditBooking = function () {
        $scope.editBooking = true;
    };
    $scope.closeEditBooking = function () {
        $scope.editBooking = false;
    }
});
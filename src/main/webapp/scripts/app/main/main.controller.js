'use strict';

angular.module('boardatjobApp')
    .controller('MainController', function ($scope, Principal) {
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });

        $scope.isRecruiter = Principal.isInRole('ROLE_RECRUITER');
    });

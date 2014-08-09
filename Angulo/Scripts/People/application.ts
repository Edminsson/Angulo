module PeopleApp {
    'use strict';

    var app = angular.module('peopleApp', [])
        .controller('mainController', mainController)
        .service('peopleStorage', peopleStorage);
} 
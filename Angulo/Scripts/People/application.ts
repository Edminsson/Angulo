module PeopleApp {
    'use strict';

    var app = angular.module('peopleApp', [])
        .controller('mainController', mainController)
        .directive('dirre', testDirective)
        .service('peopleStorage', peopleStorage);
} 
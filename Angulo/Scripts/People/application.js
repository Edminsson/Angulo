var PeopleApp;
(function (PeopleApp) {
    'use strict';

    var app = angular.module('peopleApp', []).controller('mainController', PeopleApp.mainController).directive('dirre', PeopleApp.testDirective).service('peopleStorage', PeopleApp.peopleStorage);
})(PeopleApp || (PeopleApp = {}));
//# sourceMappingURL=application.js.map

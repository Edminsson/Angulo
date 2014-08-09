var PeopleApp;
(function (PeopleApp) {
    var mainController = (function () {
        function mainController($scope, peopleStorage) {
            $scope.model = this;
            this.everyone = peopleStorage.getPeople();
        }
        mainController.$inject = ['$scope', 'peopleStorage'];
        return mainController;
    })();
    PeopleApp.mainController = mainController;
})(PeopleApp || (PeopleApp = {}));
//# sourceMappingURL=mainController.js.map

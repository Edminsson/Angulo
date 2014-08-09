module PeopleApp {
    export class mainController {
        everyone;

        static $inject = ['$scope', 'peopleStorage'];
        constructor($scope, peopleStorage: peopleStorage) {
            $scope.model = this;
            this.everyone = peopleStorage.getPeople();
        }
    }
} 
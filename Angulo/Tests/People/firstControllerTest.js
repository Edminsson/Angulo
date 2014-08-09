'use strict'

describe('Testing mainController', function () {
    var scope, controller, peopleStorageMock, people;

    beforeEach(function () {
        module('peopleApp');
        inject(function ($rootScope, $controller, peopleStorage) {
            scope = $rootScope.$new();
            peopleStorageMock = sinon.stub(peopleStorage);
            people = [{ name: 'Superman', title: 'superhero' }, { name: 'Elvis', title: 'singer' }];
            peopleStorageMock.getPeople.returns(people);
            controller = $controller('mainController', { $scope: scope });
        });
    });

    it('Should set property everybody', function () {
        expect(scope.model.everyone).toBe(people);
    });
});

describe('Testing mainController AGAIN', function () {
    var scope, $controllerConstructor, myPeopleStorageMock;

    beforeEach(function () {
        module('peopleApp');
        inject(function ($rootScope, $controller, peopleStorage) {
            scope = $rootScope.$new();
            myPeopleStorageMock = sinon.stub({ getPeople: function () { } });
            $controllerConstructor = $controller;
        });
    });

    it('Should set property everybody', function () {
        var people = [{ name: 'Superman', title: 'superhero' }, { name: 'Elvis', title: 'singer' }];
        myPeopleStorageMock.getPeople.returns(people);
        var ctrl = $controllerConstructor('mainController', { $scope: scope, peopleStorage: myPeopleStorageMock })
        expect(scope.model.everyone).toBe(people);
    });
});

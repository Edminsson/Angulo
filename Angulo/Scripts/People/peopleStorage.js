var PeopleApp;
(function (PeopleApp) {
    var peopleStorage = (function () {
        function peopleStorage() {
            this._people = [{ name: 'Zlatan', title: 'Football player' }, { name: 'Batman', title: 'Superhero' }, { name: 'Cher', title: 'Singer' }];
        }
        peopleStorage.prototype.getPeople = function () {
            return this._people;
        };
        return peopleStorage;
    })();
    PeopleApp.peopleStorage = peopleStorage;
})(PeopleApp || (PeopleApp = {}));
//# sourceMappingURL=peopleStorage.js.map

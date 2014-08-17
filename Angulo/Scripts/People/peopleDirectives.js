var PeopleApp;
(function (PeopleApp) {
    function testDirective() {
        var linkFn = function (scope, element, attrs) {
            scope.sak = 'cosas';
            element.bind('click', function () {
                console.log('Du har klickat på knappen');
            });
        };
        return {
            scope: {},
            link: linkFn
        };
    }
    PeopleApp.testDirective = testDirective;
})(PeopleApp || (PeopleApp = {}));
//# sourceMappingURL=peopleDirectives.js.map

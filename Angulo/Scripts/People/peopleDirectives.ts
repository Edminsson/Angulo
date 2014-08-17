module PeopleApp {
    export function testDirective(): ng.IDirective {
        var linkFn = function (scope, element, attrs) {
            scope.sak = 'cosas';
            element.bind('click', () => { console.log('Du har klickat på knappen'); });
        }
        return {
            scope: {},
            link:linkFn
        }
    }
} 
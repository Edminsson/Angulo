module PeopleApp {
    export class peopleStorage {
        private _people;
        constructor() {
            this._people = [{name:'Zlatan', title:'Football player'}, {name: 'Batman', title:'Superhero'}, {name:'Cher', title: 'Singer'}];
        }
        getPeople() {
            return this._people;
        }
    }
} 
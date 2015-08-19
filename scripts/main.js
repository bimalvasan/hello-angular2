function AppComponent() {
    this.tasks = ['Eat Breakfast', 'Walk Dog', 'Breathe'];
    this.addTask = function(item){
        if(this.tasks.indexOf(item) == -1){
            this.tasks.push(item);
        }        
    }
}

AppComponent.annotations = [
    new angular.ComponentAnnotation({
        selector: 'main'
    }),
    new angular.ViewAnnotation({
        template: '<h1>My first Angular 2 App</h1>' +
        '<ul><li *ng-for="#task of tasks">{{ task }}</li></ul>' +
        '<input #textbox>' +
        '<button (click)="addTask(textbox.value)">Add Task</button>',
        directives: [angular.NgFor]
    })
];

document.addEventListener('DOMContentLoaded', function () {
    angular.bootstrap(AppComponent);
});
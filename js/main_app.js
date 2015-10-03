var app = angular.module("myApp",[]);

app.controller('mainController', function($scope){
    $scope.menu = [
        {
            name: "Prezentare",
            children: ["Date generale", "Galerie foto", "Programa scolara pe discipline", "Regulament de ordine interioara"]
        },
        {
            name:"Invatamant primar",
            children: ["Metodologie", "Circumscriptia scolara", "Calendarul inscrierii"]
        },
        {
            name:"Contact",
            children: []
        }
    ];
});
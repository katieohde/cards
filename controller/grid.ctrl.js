angular.module('app.core').controller('gridController', function() {
    var vm = this;

    var max = 30;
    var min = 1;

    var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
    console.log(damage);
});
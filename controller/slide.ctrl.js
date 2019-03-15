angular.module('app.core').controller('slideController', function() {
    var vm = this;

    var viewBtn = document.querySelector('.alt-btn--slide');
    viewBtn.addEventListener('click', function(ev) {
        ev.stopPropagation();
        ev.preventDefault();
    })
});
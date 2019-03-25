angular.module('app.core').controller('indexController', ['$scope', '$http', function($scope, $http) {
    var vm = this;

    $scope.footerDetails = "SASS, HTML, AngularJS, JQuery, CSS Grid ";

    jQuery(document).ready(function($){
        $('li.dropper--color.color1').on('click', function(){
            $('body').addClass('color1');
            $('body').removeClass('color2 color3 color4 color5');
        });
        
        $('li.dropper--color.color2').on('click', function(){
            $('body').addClass('color2');
            $('body').removeClass('color1 color3 color4 color5');
            
        });

        $('li.dropper--color.color3').on('click', function() {
            $('body').addClass('color3');
            $('body').removeClass('color1 color2 color4 color5');
            
        });

        $('li.dropper--color.color4').on('click', function(){
            $('body').addClass('color4');
            $('body').removeClass('color1 color2 color3 color5');
            
        });

        $('li.dropper--color.color5').on('click', function(){
            $('body').addClass('color5');
            $('body').removeClass('color1 color2 color3 color4');
        });

        $('div.hamburger-menu').on('click', function(){
           $('div.hamburger-menu').toggleClass('open__button');
           $('div.menu__big-circle').toggleClass('show__big-circle');
        });

        $('button.btn.btnResume').on('click', function(){
            console.log('LinkedIn');
            var text = $('button.btn.btnResume').text();
            $('div.linked-in').toggleClass('show__info');
            $('button').text(
            text == "More Info" ? "Hide Info" : "More Info");
        });
        

      });


}]);
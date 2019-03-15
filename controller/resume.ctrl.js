angular.module('app.core').controller('resumeController', ['$scope', function($scope) {
    var vm = this;
    $scope.footerDetail = 'Built with: AngularJS, SASS';
    $scope.resume = {
        id: 'kohde',
        name: 'Kathleen Ohde',
        title: 'Software Engineer I',
        intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat unde optio sapiente aut voluptatibus, voluptates eum fugiat labore eos vero commodi expedita. Facilis ad minus tempore dolor sapiente, ipsum nostrum.<br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat unde optio sapiente aut voluptatibus, voluptates eum fugiat labore eos vero commodi expedita. Facilis ad minus tempore dolor sapiente, ipsum nostrum.',
        skills: ['JavaScript','HTML5','CSS','AngularJS','Bootstrap 4','SASS','SQL','CMS','Application Management','TeamSite CMS','OpenDeploy','Git','Responsive Web Design'],
        exps: ['First National Bank of Omaha','ProKarma'],
        employer: 'ProKarma',
        startDate: '05/25.27',
        cellPhone: '402.880.7600',
        workPhone: '402-345-1234',
        address: '7259 N 155th Ter',
        city: 'Bennington',
        state: 'NE',
        zip: '68007',
        workEmail: 'kohde@prokarma.com',
        personalEmail: 'kat.ohde@gmail.com'
    }

}]);
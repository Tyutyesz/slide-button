/**
 * Created by Mátyás on 2016.01.18..
 */
var app = angular.module('myApp',[]);

app.directive('matSlider', function(){

   return {
        restrict: 'E',
        template: '<div class="slider-container"><div class="slider-handle" id="button"></div></div>',
        link: function(scope,elem, attr){

            console.log(attr);
            var button = angular.element(elem[0].querySelector('.slider-handle'));
            var container = angular.element(elem[0].querySelector('.slider-container'));

            button.bind('mousedown', msDown);

            function msDown(){
                console.log('down');

                addEventListener('mousemove', moving);
                //addEventListener('mouseup', ending);
            }

            function moving(e){
                console.log(e.offsetX);
                button.css('left', e.offsetX + 'px');

                addEventListener('mouseup', ending);
            }

            function ending(e){
                removeEventListener('mousemove',moving);
                console.log('move ended');
            }



            scope.$on('$destroy', function() {
                button.unbind('mousedown', msDown);
                button.unbind('mousemove', moving);
                button.unbind('mouseup', ending);
            });
           /* button.bind('click', function(event){
                console.log(event);
            });
            container.bind('click', function(){
                console.log('haha2');
            });
*/

            //element.on('click', mouseDown);
            //element.click(function () { alert('click event handled'); })
        }
    }
});

app.controller('slideController', function($scope){
    $scope.name = 'World';

    $scope.msdown = function(){
        console.log('mousedown2');
    };
    $scope.msup = function(){
        console.log('mouseup');
    };
    $scope.msclick = function(){
        console.log('mouseclick');
    }
});
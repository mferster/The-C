(function () {
    var app = angular.module('app', []);
    app.controller("the_c", function ($scope) {
        var arr = [];
        var sections = document.getElementsByTagName('section');
        var glint = document.getElementsByTagName('div');
        
        $scope.box = {
            select: function (index) {
                if(glint[0].style["background-color"] == "red") return;
                
                sections[index].style["background-color"] = "blue";

                if (arr.indexOf(index) == -1) arr.push(index);
                if (arr.length >=7){
                    glint[0].style["background-color"] = "red";
                    var i=arr.length - 1;
                    var interval = setInterval(function(){
                        sections[arr[i]].style["background-color"] = "white";
                        i--;
                        if(i<0) {
                            clearInterval(interval);
                            glint[0].style["background-color"] = "green";
                            arr = [];
                        }
                    }, 1000);
                }
            }
        };
    })})()

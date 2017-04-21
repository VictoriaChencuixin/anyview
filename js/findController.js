/**
 * Created by 759533244 on 2017/4/16.
 */
app.controller("findController",['$scope',function ($scope) {
    setInterval(function () {
        var activeIndex = carousel.getActiveCarouselItemIndex();
        if(activeIndex == 1){
            carousel.first();
        }else{
            carousel.next();
        }
    },2000);

}]);
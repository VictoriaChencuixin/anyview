/**
 * Created by 759533244 on 2017/4/16.
 */
app.controller("bookCityController",function ($scope) {
    $scope.titles = [
        {
            name:"分类"
        },
        {
            name:"搜索"
        }
    ];
    $scope.index = 0;
    $scope.change = function (index) {
        carousels.setActiveCarouselItemIndex(index);
        $scope.index = index;
    };
    $scope.changeCarousel = function () {
        var index =  carousels.getActiveCarouselItemIndex();
        $scope.index = index;
    };

});
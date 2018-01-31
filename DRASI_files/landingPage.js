'use strict';


var rogoWeb_lan = angular.module('rogoWeb_lan',['ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ui.router',
    'oc.lazyLoad']);
	
	rogoWeb_lan.run(
		[          '$rootScope', '$state', '$stateParams',
		  function ($rootScope,   $state,   $stateParams) {
			  $rootScope.$state = $state;
			  $rootScope.$stateParams = $stateParams;        
		  }
		]
	)
	rogoWeb_lan.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state("land", {
		url:"/",
		templateUrl:"index.html"
	})
	
	
	$urlRouterProvider.otherwise("/");
	
})


rogoWeb_lan.controller('landingPage',['$scope','$http','$state', '$stateParams', '$cookies', '$cookieStore', '$location', '$window', 
						function($scope, $http, $state,  $stateParams, $cookies, $cookieStore, $location, $window){
								//	alert("abc");															
				
												$scope.currentcity="";	
												$scope.searchString="";
													
													var url="http://rogo.in/app_web/city/select";
				
													$http.get(url)
													.success(function (data, status, headers, config){
													   if(data.status == "success"){
														   //alert(JSON.stringify(data.data));
															$scope.cityList = data.data;
													   }
													   else{
															alert("Data Not Found");
													   }
													   
														//alert(JSON.stringify($scope.categoryList));
													})
													.error(function (data, status, headers, config){
														alert(JSON.stringify(config));
													});	
													
													$scope.selectCity = function(city){
														$cookieStore.put("loc_city_id",city.city_id);
														$cookieStore.put("loc_city_name",city.city_name);
														window.location="http://rogo.in/web/content/";
														
													}

						}]);
				

rogoWeb_lan.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

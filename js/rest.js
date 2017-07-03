
'use strict'
app.controller('RestCtrl',function($scope,$http){
	$scope.posts = [];
	$scope.newPost = {};
	//get data from url https://polar-inlet-99136.herokuapp.com/posts.json
	$http.get("https://polar-inlet-99136.herokuapp.com/posts.json")
	.success(function(data){
		$scope.posts = data;
	}).
	error(function(err){
		alert(err);
	});
	//post data to url https://polar-inlet-99136.herokuapp.com/posts.json
	$scope.addPost = function(){

	
		//post data in db using method post 
		$http.post("https://polar-inlet-99136.herokuapp.com/posts.json",
			{ 
				title: $scope.newPost.title,
				body: $scope.newPost.body
			})
		//if success :)
		.success(function(data,status,header,config){
				$scope.newPost.title = null;
				$scope.newPost.body = null ;
			
			})
		//if error :/
		.error(function(err,status,header,config){
				alert(err);
		})
		
	}

});
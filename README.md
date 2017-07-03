# Rest
RestApiAngularCake

This application get data from URL : https://polar-inlet-99136.herokuapp.com/posts.json.
Hosted in https://www.heroku.com with a free plan!

This a demonstration of how to use $http in angularJS, in this example i use two methods(GET and POST)

GET:
with GET method, i retrieve all data in database:
  $http.get("https://polar-inlet-99136.herokuapp.com/posts.json")
	.success(function(data){
		$scope.posts = data;
	}).
	error(function(err){
		alert(err);
	});
  
 POST: 
 with a POST method, i send data in fields to database :
 
 $scope.addPost = function(){
		//post data in db using method post 
		$http.post("https://polar-inlet-99136.herokuapp.com/posts.json",{
			//data
			title: $scope.newPost.title,
			body : $scope.newPost.body
		}).success(function(data,status,header,config){
			//reset fields
			$scope.newPost.title = null;
			$scope.newPost.body = null ;

		})
		.error(function(err,status,header,config){
			alert("error");
		});
	}
	
	to be continued..

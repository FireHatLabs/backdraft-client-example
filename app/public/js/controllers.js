angular.module('backdraft.controllers', ['backdraft.services'])

.controller('AppCtrl', function ($scope, User, $location, AppAuth) {
    AppAuth.ensureHasCurrentUser(User);	
    $scope.currentUser = AppAuth.currentUser;
			
	$scope.options = [
			{text: 'Logout', action: function () {
				User.logout(function () {
					$scope.currentUser =
					AppAuth.currentUser = null;
					$location.path('/');
				});
			}}
		];
	
	$scope.toggleLeft = function () {
			$scope.sideMenuController.toggleLeft();
		};
})

.controller('LoginCtrl', function ($scope, $routeParams, User, $location, AppAuth) {
		$scope.registration = {};
		$scope.credentials = {
			email: 'foo@bar.com',
			password: '123456'
		};
	
		$scope.login = function () {
			
			$scope.loginResult = User.login({}, $scope.credentials,
				function () {
					var next = $location.nextAfterLogin || '/account';
					$location.nextAfterLogin = null;
					AppAuth.currentUser = $scope.loginResult.user;
					$location.path(next);
				},
				function (res) {
					$scope.loginError = res.data.error;
				}
			);
		};
			
		$scope.register = function () {
			$scope.user = User.create({registration: $scope.registration},
				function () {
					$location.path('/login');
				},
				function (res) {
					$scope.registerError = res.data.error;
				}
			);
		};
			
	});

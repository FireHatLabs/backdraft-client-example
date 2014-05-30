angular.module('backdraft', [
	'ngRoute', 'ngAnimate', 'bdServices', 'backdraft.services', 'backdraft.controllers'
])

.config(function ($compileProvider) {
		$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
	})

.config(function ($routeProvider, $locationProvider, $httpProvider) {
    var isAuthenticated = function($q, $timeout, $http, $location, $rootScope) {
      var deferred = $q.defer();
      $http.get(urlBase + '/authenticated').success(function(auth){
        if (auth !== '') {
          $timeout(deferred.resolve, 0);
        } else {
          $rootScope.message = "You must log in.";
          $timeout(function(){deferred.reject();}, 0);
          $location.url('/login');
        }
      });
      return deferred.promise;
    };



		$routeProvider.when('/account', {
			templateUrl: 'account/index.html',
			controller: 'AppCtrl',
      resolve: {
        loggedin: isAuthenticated
      }
		});

		$routeProvider.when('/register', {
			templateUrl: 'auth/register.html',
			controller: 'LoginCtrl'
		});

		$routeProvider.when('/login', {
			templateUrl: 'auth/login.html',
			controller: 'LoginCtrl'
		});

		$routeProvider.otherwise({
			redirectTo: '/login'
		});

  // Intercept 401 responses and redirect to login screen
		$httpProvider.interceptors.push(function ($q, $location, AppAuth) {
			return {
				responseError: function (rejection) {
					
					console.log('intercepted rejection of ',
							rejection.config.url, rejection.status);
					
					if (rejection.status === 401) {
						AppAuth.currentUser = null;
						// save the current location so that login can redirect back
						$location.nextAfterLogin = $location.path();
						$location.path('/login');
					}
					return $q.reject(rejection);
				}
			};
		});
	})

.run(function ($rootScope, $location, AppAuth) {
		$rootScope.$on('$routeChangeStart', function (event, next, current) {
			console.log('AppAuth.currentUser', AppAuth.currentUser);
			console.log('$location.path()', $location.path());
		});

    $rootScope.logout = function() {
      $rootScope.message = "Logged out.";
      $http.post('/logout');
    }
	});


'use strict';

// TODO-FHL: FIX HARD CODED VALUE
var urlBase = 'http://127.0.0.1:3000';

var module = angular.module('bdServices', ['ngResource']); /*jshint -W079 */

/////////////////////////////////////////////////////////////////////////////

module.factory(
		'User',
		['LoopBackResource', 'LoopBackAuth', function (Resource, LoopBackAuth) {
			return Resource( /*jshint -W058 */
					urlBase,
					{ 'id': '@id' },
					{
						'login': {
							url: urlBase + '/login',
							method: 'POST',
							interceptor: {
								response: function (response) {
									console.log ("--login:interceptor:response");
									var accessToken = response.data;
									LoopBackAuth.currentUserId = accessToken.userId;
									LoopBackAuth.accessTokenId = accessToken.id;
									LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
									LoopBackAuth.save();
									return response.resource;
								}
							}
						},
						'logout': {
							url: urlBase + '/logout',
							method: 'POST',
							interceptor: {
								response: function (response) {
									LoopBackAuth.currentUserId = null;
									LoopBackAuth.accessTokenId = null;
									LoopBackAuth.save();
									return response.resource;
								}
							}
						},
						'confirm': {
							url: urlBase + '/users/confirm',
							method: 'GET'
						},
						'resetPassword': {
							url: urlBase + '/users/reset',
							method: 'POST'
						},
						'email': {
							url: urlBase + '/users/Emails',
							method: 'POST'
						},
						'accessToken': {
							url: urlBase + '/users/AccessTokens',
							method: 'POST'
						},
						'create': {
							url: urlBase + '/users',
							method: 'POST'
						},				
						'updateOrCreate': {
							url: urlBase + '/users',
							method: 'PUT'
						},
						'upsert': {
							url: urlBase + '/users',
							method: 'PUT'
						},
						'exists': {
							url: urlBase + '/users/:id/exists',
							method: 'GET'
						},
						'findById': {
							url: urlBase + '/users/:id',
							method: 'GET'
						},
						'find': {
							url: urlBase + '/users',
							method: 'GET',
							isArray: true
						},
						'findOne': {
							url: urlBase + '/users/findOne',
							method: 'GET'
						},
						'destroyById': {
							url: urlBase + '/users/:id',
							method: 'DELETE'
						},
						'deleteById': {
							url: urlBase + '/users/:id',
							method: 'DELETE'
						},
						'removeById': {
							url: urlBase + '/users/:id',
							method: 'DELETE'
						},
						'count': {
							url: urlBase + '/users/count',
							method: 'GET'
						},
						'prototype$updateAttributes': {
							url: urlBase + '/users/:id',
							method: 'PUT'
						},
						'prototype$__get__accessTokens': {
							url: urlBase + '/users/:id/accessTokens',
							method: 'GET',
							isArray: true
						},
						'prototype$__create__accessTokens': {
							url: urlBase + '/users/:id/accessTokens',
							method: 'POST'
						},
						'prototype$__delete__accessTokens': {
							url: urlBase + '/users/:id/accessTokens',
							method: 'DELETE'
						},
						'prototype$__get__transactions': {
							url: urlBase + '/users/:id/transactions',
							method: 'GET',
							isArray: true
						},
						'prototype$__create__transactions': {
							url: urlBase + '/users/:id/transactions',
							method: 'POST'
						},
						'prototype$__delete__transactions': {
							url: urlBase + '/users/:id/transactions',
							method: 'DELETE'
						},
						'getCurrent': {
							url: urlBase + '/authenticated',
							method: 'GET',
							params: {
								id: function () {
									var id = LoopBackAuth.currentUserId;
									if (id === null) id = '__anonymous__';
									return id;
								}
							},
							__isGetCurrentUser__ : true
						}
					}
			);
		}]);

/////////////////////////////////////////////////////////////////////////////

module.factory(
		'AccessToken',
		['LoopBackResource', 'LoopBackAuth', function (Resource, LoopBackAuth) {
			return Resource( /*jshint -W058 */
							urlBase + '/accessTokens/:id',
					{ 'id': '@id' },
					{
						'create': {
							url: urlBase + '/accessTokens',
							method: 'POST'
						},
						'updateOrCreate': {
							url: urlBase + '/accessTokens',
							method: 'PUT'
						},
						'upsert': {
							url: urlBase + '/accessTokens',
							method: 'PUT'
						},
						'exists': {
							url: urlBase + '/accessTokens/:id/exists',
							method: 'GET'
						},
						'findById': {
							url: urlBase + '/accessTokens/:id',
							method: 'GET'
						},
						'find': {
							url: urlBase + '/accessTokens',
							method: 'GET',
							isArray: true
						},
						'findOne': {
							url: urlBase + '/accessTokens/findOne',
							method: 'GET'
						},
						'destroyById': {
							url: urlBase + '/accessTokens/:id',
							method: 'DELETE'
						},
						'deleteById': {
							url: urlBase + '/accessTokens/:id',
							method: 'DELETE'
						},
						'removeById': {
							url: urlBase + '/accessTokens/:id',
							method: 'DELETE'
						},
						'count': {
							url: urlBase + '/accessTokens/count',
							method: 'GET'
						},
						'prototype$updateAttributes': {
							url: urlBase + '/accessTokens/:id',
							method: 'PUT'
						}
					}
			);
		}]);

/////////////////////////////////////////////////////////////////////////////

module.factory(
		'Account',
		['LoopBackResource', 'LoopBackAuth', function (Resource, LoopBackAuth) {
			return Resource( /*jshint -W058 */
							urlBase + '/accounts/:id',
					{ 'id': '@id' },
					{
						'create': {
							url: urlBase + '/accounts',
							method: 'POST'
						},
						'updateOrCreate': {
							url: urlBase + '/accounts',
							method: 'PUT'
						},
						'upsert': {
							url: urlBase + '/accounts',
							method: 'PUT'
						},
						'exists': {
							url: urlBase + '/accounts/:id/exists',
							method: 'GET'
						},
						'findById': {
							url: urlBase + '/accounts/:id',
							method: 'GET'
						},
						'find': {
							url: urlBase + '/accounts',
							method: 'GET',
							isArray: true
						},
						'findOne': {
							url: urlBase + '/accounts/findOne',
							method: 'GET'
						},
						'destroyById': {
							url: urlBase + '/accounts/:id',
							method: 'DELETE'
						},
						'deleteById': {
							url: urlBase + '/accounts/:id',
							method: 'DELETE'
						},
						'removeById': {
							url: urlBase + '/accounts/:id',
							method: 'DELETE'
						},
						'count': {
							url: urlBase + '/accounts/count',
							method: 'GET'
						},
						'prototype$updateAttributes': {
							url: urlBase + '/accounts/:id',
							method: 'PUT'
						},
						'prototype$__get__transactions': {
							url: urlBase + '/accounts/:id/transactions',
							method: 'GET',
							isArray: true
						},
						'prototype$__create__transactions': {
							url: urlBase + '/accounts/:id/transactions',
							method: 'POST'
						},
						'prototype$__delete__transactions': {
							url: urlBase + '/accounts/:id/transactions',
							method: 'DELETE'
						}
					}
			);
		}]);

/////////////////////////////////////////////////////////////////////////////

module.factory(
		'Item',
		['LoopBackResource', 'LoopBackAuth', function (Resource, LoopBackAuth) {
			return Resource( /*jshint -W058 */
							urlBase + '/items/:id',
					{ 'id': '@id' },
					{
						'create': {
							url: urlBase + '/items',
							method: 'POST'
						},
						'updateOrCreate': {
							url: urlBase + '/items',
							method: 'PUT'
						},
						'upsert': {
							url: urlBase + '/items',
							method: 'PUT'
						},
						'exists': {
							url: urlBase + '/items/:id/exists',
							method: 'GET'
						},
						'findById': {
							url: urlBase + '/items/:id',
							method: 'GET'
						},
						'find': {
							url: urlBase + '/items',
							method: 'GET',
							isArray: true
						},
						'findOne': {
							url: urlBase + '/items/findOne',
							method: 'GET'
						},
						'destroyById': {
							url: urlBase + '/items/:id',
							method: 'DELETE'
						},
						'deleteById': {
							url: urlBase + '/items/:id',
							method: 'DELETE'
						},
						'removeById': {
							url: urlBase + '/items/:id',
							method: 'DELETE'
						},
						'count': {
							url: urlBase + '/items/count',
							method: 'GET'
						},
						'prototype$updateAttributes': {
							url: urlBase + '/items/:id',
							method: 'PUT'
						}
					}
			);
		}]);

/////////////////////////////////////////////////////////////////////////////

module
		.factory('LoopBackAuth', function () {
			var props = ['accessTokenId', 'currentUserId'];

			function LoopBackAuth() {
				props.forEach(function (name) {
					this[name] = load(name);
				}.bind(this));
				this.rememberMe = undefined;
			}

			// Note: LocalStorage converts the value to string
			// We are using empty string as a marker for null/undefined values.
			function save(storage, name, value) {
				var key = '$LoopBack$' + name;
				if (value === null) value = '';
				storage[key] = value;
			}

			function load(name) {
				var key = '$LoopBack$' + name;
				return localStorage[key] || sessionStorage[key] || null;
			}

			LoopBackAuth.prototype.save = function () {
				var storage = this.rememberMe ? localStorage : sessionStorage;
				props.forEach(function (name) {
					save(storage, name, this[name]);
				}.bind(this));
			};

			return new LoopBackAuth();

		})
		.config(function ($httpProvider) {
			$httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
		})
		.factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
			function ($q, LoopBackAuth) {
				return {
					'request': function (config) {
						if (LoopBackAuth.accessTokenId) {
							config.headers.authorization = LoopBackAuth.accessTokenId;
						} else if (config.__isGetCurrentUser__) {
							// Return a stub 401 error for User.getCurrent() when
							// there is no user logged in
							var res = {
								body: { error: { status: 401 } },
								status: 401,
								config: config,
								headers: function () { return undefined; }
							};
							return $q.reject(res);
						}
						return config || $q.when(config);
					}
				};
			}])
		.factory('LoopBackResource', [ '$resource', function ($resource) {
			return function (url, params, actions) {
				var resource = $resource(url, params, actions);

				// Angular always calls POST on $save()
				// This hack is based on
				// http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
				resource.prototype.$save = function (success, error) {
					// Fortunately, LoopBack provides a convenient `upsert` method
					// that exactly fits our needs.
					var result = resource.upsert.call(this, {}, this, success, error);
					return result.$promise || result;
				};

				return resource;
			};

		}]);

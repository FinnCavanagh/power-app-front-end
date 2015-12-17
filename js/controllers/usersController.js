 angular
  .module('power')
  .controller('usersController', UserController);



UserController.$inject = ['User', 'TokenService']
function UserController(User, TokenService) {
  var self = this;

  self.all    = [];
  self.user  = {};


  console.log("this is the user controller");

  function handleLogin(res) {
    var token = res.token ? res.token : null;

    if(token) {
      console.log(res);
 
  console.log("this is handleLogin");
      self.getUsers();
      self.user = TokenService.getUser();
    }

    self.message = res.message;
    }

    self.authorize = function() {
      User.authorize(self.user, handleLogin);
    }

    self.join = function() {
      User.join(self.user, handleLogin);
    }

    self.disappear = function() {
      TokenService.removeToken();
      self.all  = [];
      self.user = {};

      $('#authorize').hide();
    }

    self.getUsers = function() {
      var response = User.query();
      console.log(response);
      response.$promise.then(function(res){
        self.all = res.users;
      });
    }

    self.isLoggedIn = function() {
      return !!TokenService.getToken();
    }

    if(self.isLoggedIn()) {
      self.getUsers();
      self.user = TokenService.getUser();
    }
}



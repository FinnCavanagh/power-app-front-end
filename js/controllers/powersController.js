angular
    .module('power')
    .controller('PowersController', PowersController);

    console.log("this is the 1st powers controller")


PowersController.$inject = ['$resource', 'Power']
function PowersController($resource, Power){
  var self = this;


  // var Power = $resource('http://localhost:3000/api/powers', { id: '@_id'}, { 
  //   'random': { method:'GET', url: 'http://localhost:3000/api/powers/random/:tag' }
  // });

  this.power = Power.random({ tag: 'happy' });

  console.log("this is the 2nd powers controller")

  // Fetch all powers
  this.powers = Power.query();

  // Fetch the clicked todo
  this.selectPower = function(power) {
    self.selectedPower = Power.get({ id: power._id });
  }

  this.editCharacter = function(power){
      self.power = power;
  }

}


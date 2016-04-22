var utils = require('../util/apiUtil');

var clientActions = {

  fetchAllPokemons: function(){
    utils.fetchAllPokemons();
  },

  fetchSinglePokemon: function(id){
    utils.fetchSinglePokemon(id);
  }
};

module.exports = clientActions;

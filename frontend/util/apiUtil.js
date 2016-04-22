var serverActions = require('../actions/serverActions');

var utils = {
  fetchAllPokemons: function(){
    $.ajax({
      method: "GET",
      url: "api/pokemon",
      dataType: 'json',
      success: function(response){
        serverActions.receiveAllPokemon(response);
      }
    });
  },

  fetchSinglePokemon: function(id){
    $.ajax({
      method: "GET",
      url: "api/pokemon/" + id,
      dataType: 'json',
      success: function(response){
        serverActions.receiveSinglePokemon(response);
      }
    });
  }
};


module.exports = utils;

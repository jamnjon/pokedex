var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');

var serverActions = {
  receiveAllPokemon: function(pokemon){
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemon: pokemon
    });
  },

  receiveSinglePokemon: function(singlePokemon){
    Dispatcher.dispatch({
      actionType: "SINGLE_POKEMON",
      pokemon: singlePokemon
    });
  }
};



module.exports = serverActions;

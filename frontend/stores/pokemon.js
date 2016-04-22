var Store = require('flux/utils').Store;
var constants = require('../constants/pokemonConstants');
var dispatcher = require('../dispatcher/dispatcher');
var serverAction = require('../actions/serverActions');
var PokemonStore = new Store(dispatcher);

var _pokemon = [];
var _currentPokemon;

PokemonStore.all = function(){
  var pokemonArray = [];
  for(var pokemonId in _pokemon) {
    pokemonArray.push(_pokemon[pokemonId]);
  }
  return pokemonArray;
};

PokemonStore.find = function (id) {

  for (var i = 0; i < _pokemon.length; i++) {
    if(_pokemon[i].id === id){
      return _pokemon[i];
    }
  }
};

var resetPokemon = function (pokemons) {
  _pokemon = [];

  pokemons.forEach(function (pokemon) {
    _pokemon.push(pokemon);
  });
  PokemonStore.__emitChange();
};

PokemonStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case constants.POKEMONS_RECEIVED:
      resetPokemon(payload.pokemon);
      break;
    case "SINGLE_POKEMON":
      _currentPokemon = payload.pokemon;
      PokemonStore.__emitChange();
  }
};



module.exports = PokemonStore;

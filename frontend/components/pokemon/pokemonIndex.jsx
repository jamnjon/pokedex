var React = require('react');
var Store = require('../../stores/pokemon');
var util = require('../../util/apiUtil'),
    PokemonIndexItem = require("./pokemonIndexItem");


var PokemonIndex = React.createClass({

  getInitialState: function(){
    return {pokemon: Store.all()};
  },

  render: function(){
    var pokemon = this.state.pokemon.map(function(el){
      return <PokemonIndexItem key={el.id} id = {el.id} name={el.name} poketype={el.poke_type}/>;
    });
    return (
      <ul>
        {pokemon}
      </ul>
    );
  },

  componentDidMount: function(){
    Store.addListener(this._onChange);
    util.fetchAllPokemons();
  },

  _onChange: function(){
    this.setState({pokemon: Store.all()});
  }
});

module.exports = PokemonIndex;

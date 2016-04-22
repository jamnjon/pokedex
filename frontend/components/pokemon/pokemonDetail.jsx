var React = require('react'),
    PokemonStore = require('../../stores/pokemon'),
    clientActions = require('../../actions/clientActions');


var PokemonDetail = React.createClass({
  getInitialState: function(){
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    return { pokemon: PokemonStore.find(parseInt(this.props.params.pokemonId)) };
  },

  componentDidMount: function () {
    this.pokemonListener = PokemonStore.addListener(this._onChange);
    clientActions.fetchSinglePokemon(parseInt(this.props.params.pokemonId));
  },

  componentWillUnmount: function () {
    this.pokemonListener.remove();
  },

  componentWillReceiveProps: function (newProps) {
    clientActions.fetchSinglePokemon(parseInt(newProps.params.pokemonId));
  },


  _onChange: function () {
    this.setState(this.getStateFromStore());
  },


  render: function(){

    if(this.state.pokemon === undefined) {
      return <div></div>;
    }
    var moves = "[";
    for (var i = 0; i < this.state.pokemon.moves.length-1; i++) {
        moves+= this.state.pokemon.moves[i] + ", ";
    }
    moves+=this.state.pokemon.moves[this.state.pokemon.moves.length-1];
    moves+=']';
    return(
      <div>
        <div id="pokemon-detail-pane">
          <div className="detail">
            <img src={this.state.pokemon.image_url}/>
            name: {this.state.pokemon.name}<br/>
            attack: {this.state.pokemon.attack}<br/>
            defense: {this.state.pokemon.defense}<br/>
            poke_type: {this.state.pokemon.poke_type}<br/>
            moves: {moves}<br/>

          </div>
        </div>
      </div>
    );
  }
});


module.exports = PokemonDetail;

var React = require('react');
var ReactDOM = require('react-dom');
var PokemonIndex = require('./components/pokemon/pokemonIndex');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var PokemonDetail = require('./components/pokemon/pokemonDetail');
var IndexRoute = require('react-router').IndexRoute;
var HashHistory = require('react-router').hashHistory;
// getPokemon = require('./actions/clientActions');
// store = require('./stores/pokemon');




var App = React.createClass({
  render : function () {
    return (
      <div id='pokedex'>
        <h2>Pokemon</h2>
        <div className='pokemon-index-pane'><PokemonIndex /></div>
        {this.props.children}
      </div>
    );
  }
});


var routes = (
  <Route path="/" component={App}>
      <Route path="pokemon/:pokemonId" component={PokemonDetail}>
    </Route>
  </Route>
);


ReactDOM.render(
  <Router history={HashHistory}>
    {routes}
  </Router>
  ,document.getElementById('root')
);



// <Route path=":monsterId" component={MonsterDetail}>
//   <Route path="powers/:powerId" component={PowerDetail}/>
// </Route>

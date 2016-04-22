var React = require('react');
var HashHistory = require('react-router').hashHistory;


module.exports = React.createClass({
  clickHandler: function(id){
    HashHistory.push("pokemon/" + this.props.id );
    },

  render: function(){
    return(
      <li
        className="poke-list-item"
        onClick={this.clickHandler.bind(this,this.props.pokemonId)}
        >Name: {this.props.name}<br/>Poke Type: {this.props.poketype}
      </li>
    );
  }
});

import React, { PureComponent } from "react";
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { buildGame, changeGameScreen } from "../actions/index";

class Players extends PureComponent {
  state = {
    players: [],
    addEnabled: true
  };

  buildGame = () => {
    // If there are no players, then no game
    if (this.state.players.length === 0) return;

    // Build the game state for the players
    this.props.buildGame(this.props.game.setupData, this.state.players);
  };

  addPlayer = () => {

  };

  removePlayer = (player) => {
    const players = this.state.players.slice(0);
    players.splice(player, 0);

    this.setState.players({players});
  }

  updateNameEntry = (player, name) => {
    const players = this.state.players.slice(0);
    players[player] = name;

    this.setState({players})
  }

  render = () => {
    return (
      <div>
        <div>
          <TextField hintText="Player Name" />
        </div>
        <div>
          <RaisedButton label="+" style={style} />
        </div>
      </div>
    );
  };
}

const style = { margin: 12 };

function mapStateToProps(game) {
  return { game };
}

function mapDispatchToProps(dispatch) {
  return {
    buildGame: (setupData, numPlayers) =>
      dispatch(buildGame(setupData, numPlayers)),
    changeGameScreen: screen => dispatch(changeGameScreen(screen))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Players);

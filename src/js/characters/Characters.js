// Class for managing the characters in the game

import React, { Component } from 'react';
import Character from "./Character.js";


export default class Characters extends Component {

	constructor(props) {

		super(props);

		this.list = [];
		this.characterList = "";

		return this;

	}


	createCharacters(jsonData) {

		for (const character of jsonData.characters) {
			this.list.push(new Character(character));
		}

		this.characterList = this.list.map(this.mapCharacterRender);

	}
	

	mapCharacterRender(character) {
		return (<div>{character.render()}</div>);
	}


	render() {
		return (
	    	<div className="Characters">
	    		{this.characterList}
	    	</div>
	  	);
	}
}
import React from 'react'

import Players from './Players.js'
import AddPlayer from './AddPlayer.js'

class Leaderboard extends React.Component {
	constructor(props){
		super(props)
		const PLAYERS = [
			{id: 1, name: "Belian", score: 25},
			{id: 2, name: "Aka", score: 15},
			{id: 3, name: "Wowo", score: 10},
			{id: 4, name: "Datuk", score: 50}
		]
		
		this.state = {
			members: PLAYERS
		}
	
	}
	onPlayerAdd = (name) => {
		let new_members = this.state.members
		new_members.push({id: new_members.lenght + 1, name: name, score: 10})
		this.setState({
			members:new_members
		})
	}
  render() {
	const style = {
		container:{
			padding: 70			
		}
	}
    	return (
		<div style={style.container}>
			<h1>Leaderboard</h1>
			<Players members={this.state.members}/>		
			<AddPlayer onAdd={this.onPlayerAdd}/>
		</div>
		)
  }
}

export default Leaderboard

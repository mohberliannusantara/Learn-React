import React from 'react'

class Player extends React.Component{
	constructor(props){
		 super(props)
		this.state = {
			score: this.props.score
		}
//		this.incrementScore = this.incrementScore.bind(this)
	}

	incrementScore = () => {
		this.setState({
			score: this.state.score + 5
		})
	}

	decrementScore = () => {
				this.setState({
			score: this.state.score - 5
		})
		
	}

	render(){
		const style = {
			player:{
				display: 'flex',
				padding: 10
			},
			name:{
				flex: '1'
				
			},
			playerScore:{
				width: 200
			},
			score:{
				padding: 20
			},
			button:{
				padding: 10
			}
		}
		return(
			<div style={style.player}>
			   <div style={style.name}>
			      {this.props.name}
			   </div>
			   <div style={style.playerScore}>
				<button onClick={this.decrementScore} style={style.button}>-</button>
				<span style={style.score}>{this.state.score}</span>
				<button onClick={this.incrementScore} style={style.button}>+</button>
			   </div>
			</div>		
		)
	}
}

export default Player

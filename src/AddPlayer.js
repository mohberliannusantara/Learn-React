import React from 'react'

class AddPlayer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: ""
		}
		//this.onPlayerChange = this.onPlayerChange.bind(this)
	}

	onPlayerChange = (event) => {
		this.setState({
			name: event.target.value
		})
		console.log(this.state.name);
	}

	render() {
		return (
			<div>
				<input onChange={this.onPlayerChange} type="text" placeholder="Input Text" value={this.state.name}/>	
				<button>Add</button>
			</div>
		)
	}
}

export default AddPlayer

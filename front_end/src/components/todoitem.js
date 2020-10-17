import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {



	getTextStyle = () => {
		return {
			textDecoration: this.props.todo.completed ?
			'line-through' : 'none'
		}
	}

	getCheckboxStyle = () => {
		if(this.props.todo.completed) {
			return true
		} else {
			return false
		}
		
	}




  	render() {
  		const { id, title } = this.props.todo;
		return (
			<div style={divStyle}>
	      		<p>
	      			<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} checked={this.getCheckboxStyle()}/>{' '}
	      			<span style={this.getTextStyle()}> { title } </span>
	      			<button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
	      		</p>
	      	</div>
	    )
  }
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
}

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 10px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}

const divStyle = {
	background: '#f4f4f4',
	padding: '10px',
	borderBottom: '1px #ccc dotted'
}
export default TodoItem;
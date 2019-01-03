import React from 'react';
import { NavLink } from 'react-router-dom'; // Link

class Menu extends React.Component {
	render () {
		return (
			<div>
				<nav>
					<NavLink activeonlywhenexact="active" exact to='/'>Home</NavLink>
					<NavLink activeonlywhenexact="active" exact to='/add-book'>Add Book</NavLink>
					<NavLink activeonlywhenexact="active" exact to='/books'>Books</NavLink>
					<NavLink activeonlywhenexact="active" exact to='/history'>History</NavLink>
				</nav>
				{this.props.children}
			</div>
		)
	}
}

export default Menu;

import React from 'react'
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';

class Book extends React.Component {
	state = { redirect: false }

	handleClick = () => {
		// Remove the book from parent
		this.props.deleteBook(this.props.data.id);
		// Set state to provide redirect
		this.setState({ redirect: true });
	}

	render () {
		// Return to the list if some the book is deleted
		//if (this.state.redirect) return (<Redirect to='/Books' />);
		// Getting the book data
		let book = this.props.data;

		return (
			<div className="book-data">
				<p className="title">{book.title}</p>

				<p><b>ID:</b> {book.id}</p>
				<p><b>Pages:</b> {book.numPages}</p>
				<p><b>New:</b> {book.isNew ? 'Yes' : 'No'}</p>

				<hr />

				<NavLink className="button" to={`/book/${book.id}`}>Edit</NavLink>
				<button className="button" onClick={() => this.handleClick()}>Delete</button>
			</div>
		)
	}
}

Book.propTypes = {
	data: PropTypes.object.isRequired,
	deleteBook: PropTypes.func.isRequired
}

export default Book;

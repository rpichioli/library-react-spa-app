import React from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class Book extends React.Component {

	handleClick = () => {
		// Remove the book from parent
		this.props.deleteBook(this.props.data.id);
	}

	render () {
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

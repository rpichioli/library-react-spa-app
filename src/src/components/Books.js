import React from 'react'
import PropTypes from 'prop-types';
import Book from './Book';

class Books extends React.Component {
	render () {
		const books = this.props.booksList.map((item, i) => <Book key={i} data={item} deleteBook={this.props.deleteBook} />);
		return (
			<div>
				<h3>All registered books</h3>
				{this.props.booksList.length > 0 ? books : "No books registered. Why don't you add some now?"}
			</div>
		)
	}
}

Books.propTypes = {
	booksList: PropTypes.array.isRequired,
	deleteBook: PropTypes.func.isRequired
}

export default Books;

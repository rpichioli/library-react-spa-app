import React, { Component } from 'react';
import './Library.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes/Routes';
import Menu from '../components/Menu';

/**
 * Library (Root Component)
 * @extends Component
 */
class Library extends Component {

	state = {
		actualID: 0, // Book's next serial ID - default value for the first time
		booksList: [], // Books collection
		operationsList: [] // Operations collection
	};

	/**
	 * @description Handle books list state with book data adding or updating it
	 * @param  {object}  book          Book data
	 * @param  {boolean} [insert=true] True for insert operation and false to update
	 */
	saveBook = (book, insert = true) => {
		if (insert) {
			// Set new ID based on incremental state
			let id = (this.state.actualID + 1);
			// Set the ID to the book
			book.id = id;
			// Setting updated list and new ID into state
			this.setState({ booksList: [...this.state.booksList, book], actualID: id }, () => {
				// Register operation history
				this.saveHistory(book.id, 'create');
			});
		} else {
			// Update the state filling the specif object
			this.setState({ booksList: this.state.booksList.map(el => el.id === book.id ? Object.assign({}, el, book) : el) }, () => {
				// Register operation history
				this.saveHistory(book.id, 'edit');
			});
		}
	}

	/**
	 * @description Delete data from state by ID
	 * @param  {integer} id Book ID
	 */
	deleteBook = (id) => {
		// Register operation history
		this.saveHistory(id, 'delete');
		// Remove book by ID filtering directly in setState
		this.setState({ booksList: this.state.booksList.filter(el => el.id !== id) });
	}

	/**
	 * Save operation into history collection
	 * @param  {integer} id   Book ID
	 * @param  {string} type  Operation to be saved
	 */
	saveHistory = (id, type) => {
		const book = this.state.booksList.filter(el => el.id === id)[0];
		if (book) {
			let operation = {}; // index book datetime types title pages condition

			operation.id = id;
			operation.bookId = (this.state.operationsList.length + 1);
			operation.datetime = book.datetime.toLocaleDateString();
			operation.type = type;
			operation.title = book.title;
			operation.numPages = book.numPages;
			operation.new = book.isNew ? true : false;

			this.state.operationsList.unshift(operation); // Add into the beginning of the list
		}
	}

	render() {
		let { booksList, operationsList } = this.state;
		return (
			<BrowserRouter>
				<div className="library">
					<Menu />
					<Routes
						booksList={booksList}
						operationsList={operationsList}
						saveBook={this.saveBook}
						deleteBook={this.deleteBook}
					/>
				</div>
			</BrowserRouter>
		);
	}
}

export default Library;

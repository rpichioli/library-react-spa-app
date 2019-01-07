import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

// Each component within routes
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import AddBook from '../components/AddBook';
import Books from '../components/Books';
import History from '../components/History';

class Routes extends React.Component {

	render () {
		// Books collection
		let booksList = this.props.booksList;
		// Operations collection
		let operationsList = this.props.operationsList;
		// Save book function sent from parent (root component) as property
		let saveBook = this.props.saveBook;
		// Remove the book by it's ID from root component
		let deleteBook = this.props.deleteBook;

		return (
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/add-book' render={(props) => <AddBook {...props} insert={true} saveBook={saveBook} />} />
				<Route path='/book/:id' render={(props) => <AddBook {...props} insert={false} saveBook={saveBook} booksList={booksList} />} />
				<Route exact path='/books' render={(props) => <Books {...props} booksList={booksList} saveBook={saveBook} deleteBook={deleteBook} />} />
				<Route exact path='/history' render={(props) => <History {...props} operationsList={operationsList} />} />
				<Route component={NotFound} />
			</Switch>
		)
	}
}

Routes.propTypes = {
	booksList: PropTypes.array.isRequired,
	operationsList: PropTypes.array.isRequired,
	saveBook: PropTypes.func.isRequired,
	deleteBook: PropTypes.func.isRequired
}

export default Routes;

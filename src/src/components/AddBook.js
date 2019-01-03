import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Redirect } from 'react-router-dom';
import { validateBook } from '../shared/FormValidations';

class AddBook extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: null,
			title: "",
			numPages: "",
			isNew: false,
			datetime: new Date(),
			insert: true,
			errors: {},
			redirect: false
		}
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleChecked = (e) => {
		this.setState({ [e.target.name]: e.target.checked });
	}

	handleSubmit = (e) => {
		e.preventDefault();

		if (this.isValid()) {
			// Clear errors
			this.setState({ errors: {} });
			// Destructing state to extract book data only
			let { id, title, numPages, isNew, datetime } = this.state;
			// Call parent funtion to save/update the book
			this.props.saveBook({ id, title, numPages, isNew, datetime }, (this.props.insert) ? true : false);
			// Redirect to the list page
			this.setState({ redirect: true });
		}
	}

	/**
	* Validate form data, set state based on response and return boolean
	* @return {Boolean} true - OK, false - invalid
	*/
	isValid = () => {
		const { errors, isValid } = validateBook(this.state);
		if (!isValid) this.setState({ errors: errors });
		return isValid;
	}

	render () {

		// Redirect to list after a successful submit
		if (this.state.redirect) {
			return (<Redirect to='/Books' />);
		}

		let { errors } = this.state;

		return (
			<div>
				<h3>Add new book sending the full filled form below</h3>

				<form onSubmit={this.handleSubmit}>

					<div className={classnames('field-container', { invalid: errors.title })}>
						<label htmlFor="title">Title:</label><br />
						<input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} />
						{errors.title && <span>{errors.title}</span>}
					</div>
					<div className={classnames('field-container', { invalid: errors.title })}>
						<label htmlFor="numPages">Number of Pages:</label><br />
						<input type="text" id="numPages" name="numPages" value={this.state.numPages} onChange={this.handleChange} />
						{errors.numPages && <span>{errors.numPages}</span>}
					</div>
					<div className='field-container'>
						<label htmlFor="isNew">New book?</label><br />
						<input type="checkbox" id="isNew" name="isNew" value={this.state.isNew} onChange={this.handleChecked} />
					</div>
					<button type="submit">Save</button>
				</form>
			</div>

		)
	}

	componentDidMount() {
		// Destructing props of interest
		let { booksList, insert } = this.props;
		// If is edit mode and we have params sent to the component
		if (!insert && this.props.match && this.props.match.params) {
			// Get the book information
			let book = booksList.filter(book => book.id === parseInt(this.props.match.params.id))[0];
			// If we find the book then we set it's data to state to fill the form
			if (book) {
				this.setState({
					id: book.id,
					title: book.title,
					numPages: book.numPages,
					isNew: book.isNew
				});
			}
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		//console.log('provProps', prevProps, 'prevState', prevState, 'state', this.state);
	}
}

AddBook.propTypes = {
	insert: PropTypes.bool.isRequired, // Boolean that commands the component into insert or update tasks
	saveBook: PropTypes.func.isRequired, // Function from the parent
	booksList: PropTypes.array // List of books
}

export default AddBook;

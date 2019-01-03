import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function validateBook(data) {
	let errors = {};

	if (Validator.isEmpty(data.title))
		errors.title = 'This field is required!';

	if (Validator.isEmpty(data.numPages))
		errors.numPages = 'This field is required!'
	else if (!Validator.isNumeric(data.numPages))
		errors.numPages = 'This field must be a number!';
	else if (!Validator.isInt(data.numPages))
		errors.numPages = 'This field must be integer!';

	return {
		errors,
		isValid: isEmpty(errors)
	}
}

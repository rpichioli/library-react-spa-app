import React from 'react';
import PropTypes from 'prop-types';

class History extends React.Component {
	render () {
		const operationsList = this.props.operationsList;
		let gridData = "";

		if (operationsList.length > 0) {
			gridData = operationsList.map((history, i) => {
				return (
					<tr key={i}>
						<td>{history.id}</td>
						<td>{history.bookId}</td>
						<td>{history.title}</td>
						<td>{history.type}</td>
						<td>{history.numPages}</td>
						<td>{history.new ? <span style={{'color':'green'}}>New</span> : <span style={{'color':'orange'}}>Used</span>}</td>
						<td>{history.datetime.toLocaleDateString()} {history.datetime.toLocaleTimeString()}</td>
					</tr>
				);
			})
		}

		return (
			<div>
				<h3>Operations history</h3>

				{
					(gridData !== "") ?
						<table cellPadding="0" cellSpacing="0">
							<thead>
								<tr>
									<th>#</th>
									<th>Book Id</th>
									<th>When</th>
									<th>Type</th>
									<th>Title</th>
									<th>Pages</th>
									<th>Condition</th>
								</tr>
							</thead>
							<tbody>
								{gridData}
							</tbody>
						</table>
					:
						<p>No history in the moment</p>
				}
			</div>
		)
	}
}

History.propTypes = {
	operationsList: PropTypes.array.isRequired
}

export default History;

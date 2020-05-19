import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

export default class Field extends Component {
	render() {
		return (
			<div className="ui field">
				<label htmlFor="name">
					<LanguageContext.Consumer>
						{(value) => (value === 'english' ? 'Name' : 'نام')}
					</LanguageContext.Consumer>
				</label>
				<input type="text" name="name" id="name" />
			</div>
		);
	}
}

import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

export default class Field extends Component {
	static contextType = LanguageContext;
	render() {
		const labelName = this.context === 'english' ? 'Name' : 'نام';
		return (
			<div className="ui field">
				<label htmlFor="name">{labelName}</label>
				<input type="text" name="name" id="name" />
			</div>
		);
	}
}

import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

export default class Button extends Component {
	renderButtonTitle = (value) => {
		return value === 'english' ? 'Submit' : 'ارسال';
	};
	render() {
		{
			/* Consumer property is a react component that is used to get info from context object */
		}

		return (
			<button className="ui button primary">
				<LanguageContext.Consumer>
					{/* the child of Consumer should be a function that get value inside pipe (context object)  */}
					{/* We use Consumer when we are going to use multiple contexts */}
					{(value) => (value === 'english' ? 'Submit' : 'ارسال')}
				</LanguageContext.Consumer>
			</button>
		);
	}
}

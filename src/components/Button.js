import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';

export default class Button extends Component {
	// contextType is going to link Button to context object. We connected a context object to Button component. `contextType` must not be renamed.
	// `static` adds a property directly to a class and it is equivalent to `Botton.contextType = LanguageContext` after creating a class.
	static contextType = LanguageContext;

	// After creating contextType, we can reference this.context and access data inside context object.
	render() {
		const buttonTitle = this.context === 'english' ? 'Submit' : 'ارسال';
		return <button className="ui button primary">{buttonTitle}</button>;
	}
}

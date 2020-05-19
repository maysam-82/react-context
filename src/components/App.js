import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';

class App extends Component {
	state = {
		language: 'english',
	};

	onLanguageChanged = (language) => {
		this.setState({ language });
	};

	render() {
		return (
			<div className="ui container">
				<div>
					Select a language:
					<i
						className="flag gb"
						onClick={() => this.onLanguageChanged('english')}
					/>
					<i
						className="flag ir"
						onClick={() => this.onLanguageChanged('persian')}
					/>
				</div>
				{/* Provider is used to connect App component to context object. */}
				{/* Component that needs information from context object */}
				{/* value props is an special prop of Provider which contain value that we are going to put inside of context object which here is `state.language`*/}
				<LanguageContext.Provider value={this.state.language}>
					<UserCreate />
				</LanguageContext.Provider>
			</div>
		);
	}
}

export default App;

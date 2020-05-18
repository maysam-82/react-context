import React, { Component } from 'react';
import UserCreate from './UserCreate';
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
				<UserCreate />
			</div>
		);
	}
}

export default App;
